// src/components/home/Hero.jsx
// Name, one-line intro and the two main actions, next to the typed code window.
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { homeCopy, profile } from '../../data/profile';
import Icon from '../ui/Icon';
import CodeWindow from './CodeWindow';

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } }),
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <motion.h1 className="display" variants={rise} custom={0} initial="hidden" animate="show">
          {homeCopy.greeting}
        </motion.h1>
        <motion.p className="lead" variants={rise} custom={1} initial="hidden" animate="show">
          {homeCopy.intro}
        </motion.p>
        {homeCopy.next && (
          <motion.p className="next-note" variants={rise} custom={2} initial="hidden" animate="show">
            <span className="next-dot" aria-hidden="true" />
            {homeCopy.next}
          </motion.p>
        )}
        <motion.div className="actions" variants={rise} custom={3} initial="hidden" animate="show">
          <a className="btn btn-primary" href={profile.cv.href} download={profile.cv.filename}>
            <Icon name="download" size={18} /> Download CV
          </a>
          <Link className="btn btn-secondary" to="/projects" viewTransition>
            See projects <Icon name="arrow-right" size={18} />
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="hero-code"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <CodeWindow />
      </motion.div>
    </section>
  );
}
