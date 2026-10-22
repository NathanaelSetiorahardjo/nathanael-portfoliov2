// src/components/layout/Providers.jsx
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PaletteContext, ThemeContext, ToastContext } from '../../context/appContext';
import Icon from '../ui/Icon';

// index.html sets data-theme before the first paint, so start from that.
function initialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function Providers({ children }) {
  const [theme, setTheme] = useState(initialTheme);
  const [toast, setToast] = useState(null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteEverOpened, setPaletteEverOpened] = useState(false);
  const toastTimer = useRef();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  const showToast = useCallback((message) => {
    clearTimeout(toastTimer.current);
    setToast({ message, id: Date.now() });
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  const themeValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  const toastValue = useMemo(() => ({ showToast }), [showToast]);
  const setPalette = useCallback((value) => {
    setPaletteEverOpened(true);
    setPaletteOpen(value);
  }, []);

  // Cmd/Ctrl+K opens the palette from anywhere, even before its code has loaded.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPalette((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setPalette]);

  const paletteValue = useMemo(
    () => ({ open: paletteOpen, everOpened: paletteEverOpened, setOpen: setPalette }),
    [paletteOpen, paletteEverOpened, setPalette],
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <ToastContext.Provider value={toastValue}>
        <PaletteContext.Provider value={paletteValue}>
          {children}
          <div className="toast-region" aria-live="polite">
            <AnimatePresence>
              {toast && (
                <motion.div
                  key={toast.id}
                  className="toast"
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                >
                  <Icon name="check" size={18} /> {toast.message}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </PaletteContext.Provider>
      </ToastContext.Provider>
    </ThemeContext.Provider>
  );
}
