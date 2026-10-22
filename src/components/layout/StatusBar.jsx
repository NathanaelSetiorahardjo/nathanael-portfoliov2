// src/components/layout/StatusBar.jsx
// Desktop: an editor status bar (open file, line, search, email). Phone: the bottom tab bar.
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fileForPath, navItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import { useCopyEmail } from '../../hooks/useCopyEmail';
import { usePalette } from '../../hooks/usePalette';
import Icon from '../ui/Icon';

const LINE = 28; // keep in step with --code-line in index.css

// The "Ln" counter follows the scroll position, like a cursor moving down the file.
function useScrollLine() {
  const [line, setLine] = useState(1);
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setLine(Math.floor(window.scrollY / LINE) + 1));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return line;
}

export default function StatusBar() {
  const { pathname } = useLocation();
  const { setOpen } = usePalette();
  const copyEmail = useCopyEmail();
  const line = useScrollLine();
  const file = fileForPath(pathname);

  return (
    <>
      <footer className="statusbar" aria-label="Status bar">
        <span className="status-item">
          <span className="status-dot" aria-hidden="true" />
          main
        </span>
        <span className="status-item">{file.file}</span>
        <span className="status-item" aria-hidden="true">
          Ln {line}, Col 1
        </span>
        <span className="status-spacer" />
        <button type="button" className="status-item status-button" onClick={() => setOpen(true)}>
          ⌘K Search
        </button>
        <button type="button" className="status-item status-button" onClick={copyEmail} title="Copy email address">
          <Icon name="mail" size={14} /> {profile.email}
        </button>
      </footer>

      <nav className="tabbar" aria-label="Main">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} viewTransition className="tabbar-link">
            <Icon name={item.icon} size={22} />
            <span>{item.label}</span>
          </NavLink>
        ))}
        <button type="button" className="tabbar-link" onClick={() => setOpen(true)}>
          <Icon name="search" size={22} />
          <span>Search</span>
        </button>
      </nav>
    </>
  );
}
