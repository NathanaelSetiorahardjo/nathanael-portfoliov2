// src/components/layout/ThemeToggle.jsx
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from '../../hooks/useTheme';
import Icon from '../ui/Icon';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <button type="button" className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${next} theme`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          className="icon-swap"
          initial={{ y: -10, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={18} />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
