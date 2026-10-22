// src/components/molly/Molly.jsx
// Molly, the desktop companion. Molly blinks, swishes the tail, watches the pointer,
// and naps after a while with no activity. A click shows a tip, sometimes with a shortcut.
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { mollyLines, mollySleeping } from '../../data/molly';
import { profile } from '../../data/profile';
import { useCopyEmail } from '../../hooks/useCopyEmail';
import { usePalette } from '../../hooks/usePalette';
import Icon from '../ui/Icon';
import MollySprite from './MollySprite';

const NAP_AFTER_MS = 40000;

function downloadCv() {
  const a = document.createElement('a');
  a.href = profile.cv.href;
  a.download = profile.cv.filename;
  a.click();
}

// Which way Molly looks: -1 left, 0 ahead, 1 right. Only re-renders when the direction changes.
function useLook(ref, enabled) {
  const [look, setLook] = useState(0);
  useEffect(() => {
    if (!enabled) return undefined;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const dx = e.clientX - (rect.left + rect.width / 2);
        setLook(dx < -60 ? -1 : dx > 60 ? 1 : 0);
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, [ref, enabled]);
  return look;
}

// True after NAP_AFTER_MS with no pointer, key or scroll activity.
function useNap() {
  const [asleep, setAsleep] = useState(false);
  const last = useRef(0);
  useEffect(() => {
    last.current = Date.now();
    const wake = () => {
      last.current = Date.now();
    };
    const events = ['pointermove', 'pointerdown', 'keydown', 'scroll'];
    events.forEach((e) => window.addEventListener(e, wake, { passive: true }));
    const timer = setInterval(() => {
      if (Date.now() - last.current > NAP_AFTER_MS) setAsleep(true);
    }, 5000);
    return () => {
      events.forEach((e) => window.removeEventListener(e, wake));
      clearInterval(timer);
    };
  }, []);
  return [asleep, setAsleep];
}

export default function Molly({ scale = 3, placement = 'explorer' }) {
  const ref = useRef(null);
  const [asleep, setAsleep] = useNap();
  const [line, setLine] = useState(-1); // -1: bubble closed
  const [hops, setHops] = useState(0);
  const look = useLook(ref, !asleep);
  const { setOpen } = usePalette();
  const copyEmail = useCopyEmail();

  const open = line >= 0;
  const current = open ? mollyLines[line] : null;

  const onClick = () => {
    setHops((h) => h + 1);
    if (asleep) {
      setAsleep(false);
      setLine(0);
      return;
    }
    setLine((l) => (l + 1) % mollyLines.length);
  };

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setLine(-1);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const runAction = () => {
    if (current.action === 'search') setOpen(true);
    if (current.action === 'cv') downloadCv();
    if (current.action === 'email') copyEmail();
    setLine(-1);
  };

  return (
    <div className={`molly molly-${placement}${asleep ? ' is-asleep' : ''}`}>
      <AnimatePresence>
        {(open || asleep) && (
          <motion.div
            key={asleep ? 'zzz' : 'talk'}
            className="molly-bubble"
            role="status"
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 520, damping: 32 }}
          >
            <p>{asleep ? mollySleeping : current.text}</p>
            {!asleep && (
              <div className="molly-bubble-actions">
                {current.action && (
                  <button type="button" className="btn btn-primary btn-small" onClick={runAction}>
                    {current.label}
                  </button>
                )}
                <button type="button" className="molly-close" onClick={() => setLine(-1)} aria-label="Close Molly’s message">
                  <Icon name="close" size={14} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        ref={ref}
        type="button"
        className="molly-button"
        onClick={onClick}
        aria-label={asleep ? 'Molly the cat is napping. Click to wake Molly up' : 'Molly the cat. Click for a tip'}
      >
        <motion.span
          key={hops}
          className="molly-hop"
          initial={hops ? { y: 0 } : false}
          animate={hops ? { y: [0, -10, 0, -3, 0] } : undefined}
          transition={{ duration: 0.5, times: [0, 0.35, 0.65, 0.82, 1], ease: 'easeOut' }}
        >
          <MollySprite look={look} eyesClosed={asleep} scale={scale} />
        </motion.span>
        {asleep && (
          <span className="molly-zzz" aria-hidden="true">
            <span>z</span>
            <span>z</span>
            <span>Z</span>
          </span>
        )}
        <AnimatePresence>
          {current?.hearts && (
            <span className="molly-hearts" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={`${hops}-${i}`}
                  className="molly-heart"
                  initial={{ opacity: 0, y: 0, x: (i - 1) * 14, scale: 0.6 }}
                  animate={{ opacity: [0, 1, 0], y: -36, scale: 1 }}
                  transition={{ duration: 1.1, delay: i * 0.12, ease: 'easeOut' }}
                />
              ))}
            </span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
