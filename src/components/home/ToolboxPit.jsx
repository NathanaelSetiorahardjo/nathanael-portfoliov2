// src/components/home/ToolboxPit.jsx
// The toolbox as a physics pit: tools drop in when you scroll to them, and you can drag and throw them.
// The physics code loads only when the pit comes into view. With reduced motion the tools
// appear already landed (no falling), and only move when someone drags them.
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import Icon from '../ui/Icon';

export default function ToolboxPit({ tools }) {
  const reduceMotion = useReducedMotion();
  const pitRef = useRef(null);
  const chipRefs = useRef([]);
  const pit = useRef(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const container = pitRef.current;
    let cancelled = false;
    let loading = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pit.current && !loading) {
          loading = true;
          Promise.all([import('matter-js'), import('./toolboxPhysics')]).then(([matter, { createPit }]) => {
            if (cancelled) return;
            setLive(true);
            requestAnimationFrame(() => {
              if (cancelled) return;
              pit.current = createPit(matter.default ?? matter, container, chipRefs.current.filter(Boolean));
              pit.current.setVisible(true);
              if (reduceMotion) pit.current.settle();
              else pit.current.drop();
            });
          });
        }
        pit.current?.setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );
    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
      pit.current?.destroy();
      pit.current = null;
    };
  }, [reduceMotion]);

  return (
    <div className="toolbox-wrap">
      <ul ref={pitRef} className={`toolbox${live ? ' is-live' : ''}`}>
        {tools.map((t, i) => (
          <li
            key={t}
            ref={(el) => {
              chipRefs.current[i] = el;
            }}
            className="tool"
          >
            {t}
          </li>
        ))}
      </ul>
      {live && (
        <p className="toolbox-hint">
          <span>Drag and throw them.</span>
          <button type="button" className="text-link" onClick={() => (reduceMotion ? pit.current?.settle() : pit.current?.drop())}>
            <Icon name="download" size={16} /> Drop again
          </button>
        </p>
      )}
    </div>
  );
}
