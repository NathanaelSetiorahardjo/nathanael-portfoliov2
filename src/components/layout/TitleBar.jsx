// src/components/layout/TitleBar.jsx
// The window title bar. Shows the open file, search, theme and the CV download.
import { Link, useLocation } from 'react-router-dom';
import { fileForPath } from '../../data/navigation';
import { profile } from '../../data/profile';
import { usePalette } from '../../hooks/usePalette';
import FileBadge from '../ui/FileBadge';
import Icon from '../ui/Icon';
import PixelMascot from '../ui/PixelMascot';
import ThemeToggle from './ThemeToggle';

export default function TitleBar() {
  const { pathname } = useLocation();
  const { setOpen } = usePalette();
  const file = fileForPath(pathname);

  return (
    <header className="titlebar">
      <span className="traffic-lights" aria-hidden="true">
        <span />
        <span />
        <span />
      </span>

      <Link to="/" viewTransition className="brand" aria-label={`${profile.name}, home`}>
        <span className="mascot-tile">
          <PixelMascot size={22} />
        </span>
        <span className="brand-file">
          <FileBadge type={file.type} />
          {file.file}
        </span>
      </Link>

      <p className="window-title" aria-hidden="true">
        {file.file} <span className="window-title-dim">· {profile.name}</span>
      </p>

      <div className="titlebar-actions">
        <button type="button" className="search-button" onClick={() => setOpen(true)} aria-label="Search files and actions">
          <Icon name="search" size={16} />
          <span className="search-label">Search files</span>
          <kbd>⌘K</kbd>
        </button>
        <ThemeToggle />
        <a className="btn btn-primary btn-small" href={profile.cv.href} download={profile.cv.filename}>
          <Icon name="download" size={16} />
          <span>CV</span>
        </a>
      </div>
    </header>
  );
}
