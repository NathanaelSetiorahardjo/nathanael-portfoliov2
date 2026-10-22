// src/components/ui/SectionHeader.jsx
// Section title with an optional intro line and a link to the full page on the right.
// The first time the title scrolls into view, an editor-style selection sweeps across it.
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Icon from './Icon';

export default function SectionHeader({ id, title, intro, link }) {
  return (
    <div className="section-header">
      <div>
        <h2 id={id} className="section-title">
          <span className="sweep-wrap">
            <motion.span
              className="sweep"
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 1 }}
              whileInView={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1.2, times: [0, 0.4, 1], ease: 'easeOut' }}
            />
            {title}
          </span>
        </h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {link && (
        <Link className="text-link" to={link.to} viewTransition>
          {link.label} <Icon name="arrow-right" size={16} />
        </Link>
      )}
    </div>
  );
}
