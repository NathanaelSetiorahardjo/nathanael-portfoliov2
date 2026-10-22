// src/components/layout/EditorTabs.jsx
// Open-file tabs (desktop). Each page you visit opens as a tab; tabs can be closed.
// Below the tabs, a breadcrumb shows where the open file lives.
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { fileForPath } from '../../data/navigation';
import FileBadge from '../ui/FileBadge';
import Icon from '../ui/Icon';

const MAX_TABS = 6;
const spring = { type: 'spring', stiffness: 520, damping: 40 };

export default function EditorTabs() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const current = fileForPath(pathname);
  const [tabs, setTabs] = useState([current.to]);
  const [seen, setSeen] = useState(current.to);

  // Opening a page adds its tab (React's "adjust state while rendering" pattern).
  if (seen !== current.to) {
    setSeen(current.to);
    setTabs((t) => (t.includes(current.to) ? t : [...t, current.to].slice(-MAX_TABS)));
  }

  const shown = tabs.includes(current.to) ? tabs : [...tabs, current.to];

  const close = (to) => {
    const index = shown.indexOf(to);
    const rest = shown.filter((t) => t !== to);
    setTabs(rest);
    if (to === current.to) navigate(rest[index] ?? rest[index - 1] ?? '/', { viewTransition: true });
  };

  return (
    <div className="editor-head">
      <ul className="tabs" aria-label="Open files">
        <AnimatePresence initial={false} mode="popLayout">
          {shown.map((to) => {
            const file = fileForPath(to);
            const active = to === current.to;
            return (
              <motion.li
                key={to}
                layout
                className={`tab${active ? ' is-active' : ''}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={spring}
              >
                {active && <motion.span layoutId="tab-active" className="tab-indicator" transition={spring} />}
                <Link to={to} viewTransition className="tab-link" aria-current={active ? 'page' : undefined}>
                  <FileBadge type={file.type} />
                  {file.file}
                </Link>
                {shown.length > 1 && (
                  <button type="button" className="tab-close" aria-label={`Close ${file.file}`} onClick={() => close(to)}>
                    <Icon name="close" size={14} />
                  </button>
                )}
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
      <p className="breadcrumb" aria-label="File path">
        <span>portfolio</span>
        {current.dir && (
          <>
            <span className="breadcrumb-sep" aria-hidden="true">›</span>
            <span>{current.dir}</span>
          </>
        )}
        <span className="breadcrumb-sep" aria-hidden="true">›</span>
        <span className="breadcrumb-file">
          <FileBadge type={current.type} />
          {current.file}
        </span>
      </p>
    </div>
  );
}
