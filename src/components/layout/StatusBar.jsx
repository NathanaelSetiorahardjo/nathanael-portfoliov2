// src/components/layout/StatusBar.jsx
// Desktop: an IDE status bar showing where you are. Phone: the bottom tab bar.
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import { projectData } from '../../data/projects';
import { usePalette } from '../../hooks/usePalette';
import Icon from '../ui/Icon';

function filePath(pathname) {
  const project = pathname.match(/^\/projects\/(.+)$/);
  if (project) {
    const found = projectData.find((p) => p.id === project[1]);
    return found ? `~/projects/${found.id}.md` : '~/404';
  }
  const item = navItems.find((n) => n.to === pathname);
  return item ? `~/${item.file}` : '~/404';
}

export default function StatusBar() {
  const { pathname } = useLocation();
  const { setOpen } = usePalette();

  return (
    <>
      <footer className="statusbar" aria-label="Status bar">
        <span className="status-item">
          <span className="status-dot" aria-hidden="true" />
          {filePath(pathname)}
        </span>
        <span className="status-spacer" />
        <button type="button" className="status-item status-button" onClick={() => setOpen(true)}>
          ⌘K commands
        </button>
        <span className="status-item">{profile.email}</span>
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
