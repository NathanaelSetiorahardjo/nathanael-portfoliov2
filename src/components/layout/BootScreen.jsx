// src/components/layout/BootScreen.jsx
// First-visit "building the workbench" loader. Max ~1.2 s, skipped by any tap or key,
// shown once per browser session and never with reduced motion.
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import PixelMascot from '../ui/PixelMascot';

const BLOCKS = 12;
const STEP_MS = 85;
const SEEN_KEY = 'workbench-booted';

function alreadySeen() {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return true;
  }
}

export default function BootScreen() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(() => !alreadySeen());
  const [filled, setFilled] = useState(0);
  const show = visible && !reduceMotion;

  useEffect(() => {
    if (!show) return undefined;
    const finish = () => {
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch {
        // Ignore: the loader just shows again next visit.
      }
      setVisible(false);
    };
    const timer = setInterval(() => {
      setFilled((f) => {
        if (f >= BLOCKS) {
          clearInterval(timer);
          setTimeout(finish, 220);
          return f;
        }
        return f + 1;
      });
    }, STEP_MS);
    window.addEventListener('keydown', finish);
    window.addEventListener('pointerdown', finish);
    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', finish);
      window.removeEventListener('pointerdown', finish);
    };
  }, [show]);

  const done = filled >= BLOCKS;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="boot"
          role="status"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <div className="boot-card">
            <span className="mascot-tile mascot-tile-large">
              <PixelMascot size={64} />
            </span>
            <p className="boot-label">{done ? 'Ready' : 'Building Nathanael’s workbench…'}</p>
            <div className="boot-bar" aria-hidden="true">
              {Array.from({ length: BLOCKS }, (_, i) => (
                <span key={i} className={i < filled ? 'boot-block on' : 'boot-block'} />
              ))}
            </div>
            <p className="boot-hint">Tap or press any key to skip</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
