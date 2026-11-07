// src/components/molly/Molly.jsx
// Molly, the desktop companion. Molly blinks, swishes the tail, watches the pointer,
// goes for a short stroll now and then, and naps after a while with no activity.
// A click shows a tip, sometimes with a shortcut.
import { useEffect, useRef, useState } from 'react';
import { animate, AnimatePresence, motion, useMotionValue, useReducedMotion } from 'motion/react';
import { mollyLines, mollySleeping } from '../../data/molly';
import { profile } from '../../data/profile';
import { useCopyEmail } from '../../hooks/useCopyEmail';
import { usePalette } from '../../hooks/usePalette';
import Icon from '../ui/Icon';
import MollySprite from './MollySprite';

const NAP_AFTER_MS = 40000;
// A stroll starts at a random moment in this window (ms) and moves at this speed (px/s).
const STROLL_EVERY = [9000, 20000];
const WALK_SPEED = 42;
const random = (min, max) => min + Math.random() * (max - min);

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

// How far Molly may walk from home, as [min, max] x offsets in px.
// In the explorer Molly starts at the left and walks right; on the phone tab bar
// Molly starts at the right edge and walks left across the screen.
function strollRange(container, button, placement) {
  const spriteW = button.offsetWidth;
  if (placement === 'dock') return [-(window.innerWidth - spriteW - 20), 0];
  const style = getComputedStyle(container);
  const inner = container.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
  return [0, Math.max(0, inner - spriteW)];
}

// Now and then Molly gets up, walks to a random spot and sits again.
// Off while asleep, talking, hidden or with reduced motion.
function useStroll(containerRef, buttonRef, placement, enabled) {
  const x = useMotionValue(0);
  const [walking, setWalking] = useState(false);
  const [facing, setFacing] = useState(placement === 'dock' ? -1 : 1);
  const walk = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;
    let timer;
    const schedule = () => {
      timer = setTimeout(start, random(...STROLL_EVERY));
    };
    const start = () => {
      const container = containerRef.current;
      const button = buttonRef.current;
      if (!container || !button || document.hidden) return schedule();
      const [min, max] = strollRange(container, button, placement);
      const from = x.get();
      let to = random(min, max);
      if (Math.abs(to - from) < 40) to = from > (min + max) / 2 ? min : max; // always a proper walk
      if (Math.abs(to - from) < 20) return schedule();
      setFacing(to > from ? 1 : -1);
      setWalking(true);
      walk.current = animate(x, to, { duration: Math.abs(to - from) / WALK_SPEED, ease: 'linear' });
      walk.current.then(() => {
        setWalking(false);
        schedule();
      });
      return undefined;
    };
    schedule();
    return () => {
      clearTimeout(timer);
      walk.current?.stop();
      setWalking(false);
    };
  }, [enabled, containerRef, buttonRef, placement, x]);

  return { x, walking, facing };
}

export default function Molly({ scale = 3, placement = 'explorer' }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [asleep, setAsleep] = useNap();
  const [line, setLine] = useState(-1); // -1: bubble closed
  const [hops, setHops] = useState(0);
  const reduceMotion = useReducedMotion();
  const look = useLook(ref, !asleep);
  const { setOpen } = usePalette();
  const copyEmail = useCopyEmail();

  const open = line >= 0;
  const current = open ? mollyLines[line] : null;
  const { x, walking, facing } = useStroll(containerRef, ref, placement, !asleep && !open && !reduceMotion);
  // Where the speech bubble sits: on phones it slides along with Molly but stays on screen,
  // and its little pointer always aims at Molly (see .molly-bubble in index.css).
  const [bubble, setBubble] = useState({ x: 0, shift: 0 });

  const onClick = () => {
    const mollyX = Math.round(x.get());
    const bubbleW = Math.min(260, window.innerWidth - 32);
    const shift = placement === 'dock' ? Math.max(mollyX, 26 + bubbleW - window.innerWidth) : 0;
    setBubble({ x: mollyX, shift });
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
    <div
      ref={containerRef}
      className={`molly molly-${placement}${asleep ? ' is-asleep' : ''}`}
      style={{ '--molly-x': `${bubble.x}px`, '--bubble-shift': `${bubble.shift}px` }}
    >
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

      <motion.button
        ref={ref}
        type="button"
        className="molly-button"
        style={{ x }}
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
          <span className={`molly-facing${walking && facing < 0 ? ' is-left' : ''}`}>
            <MollySprite look={look} eyesClosed={asleep} walking={walking} scale={scale} />
          </span>
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
      </motion.button>
    </div>
  );
}
