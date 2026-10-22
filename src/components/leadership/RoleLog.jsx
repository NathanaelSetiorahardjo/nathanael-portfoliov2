// src/components/leadership/RoleLog.jsx
// Leadership roles as a git-style log: one entry per role on a branch line, newest first.
// The branch line draws itself as you scroll down the log.
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';

export default function RoleLog({ items }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 60%'] });
  const draw = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <ol ref={ref} className="role-log">
      <motion.span className="role-log-line" style={{ scaleY: draw }} aria-hidden="true" />
      {items.map((item, i) => (
        <Reveal as="li" key={item.id} index={i} className="log-entry">
          <span className={`log-node${item.date.includes('Present') ? ' is-head' : ''}`} aria-hidden="true" />
          <article className="card log-card">
            <img className="log-photo" src={item.image} alt={item.org} loading="lazy" decoding="async" />
            <div className="log-body">
              <p className="log-date">
                {item.date}
                {item.date.includes('Present') && <span className="log-head">current</span>}
              </p>
              <h3 className="card-title">{item.title}</h3>
              <p className="log-org">
                {item.org}
                {item.link && (
                  <a className="inline-link" href={item.link.url} target="_blank" rel="noreferrer">
                    <Icon name="instagram" size={16} /> {item.link.name}
                  </a>
                )}
              </p>
              <ul className="log-bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </ol>
  );
}
