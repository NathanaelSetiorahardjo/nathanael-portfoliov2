// src/components/layout/TopBar.jsx
// Desktop: brand + editor-style file tabs + actions. Phone: brand + actions (tabs move to the bottom bar).
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import { usePalette } from '../../hooks/usePalette';
import Icon from '../ui/Icon';
import PixelMascot from '../ui/PixelMascot';
import ThemeToggle from './ThemeToggle';

export default function TopBar() {
  const { setOpen } = usePalette();

  return (
    <header className="topbar">
      <Link to="/" viewTransition className="brand" aria-label="Nathanael Setiorahardjo, home">
        <span className="mascot-tile">
          <PixelMascot size={28} />
        </span>
        <span className="brand-name">Nathanael</span>
      </Link>

      <nav className="file-tabs" aria-label="Main">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} viewTransition className="file-tab">
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="file-tab-active"
                    className="file-tab-bg"
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  />
                )}
                <span className="file-tab-label">{item.file}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="topbar-actions">
        <button type="button" className="search-button" onClick={() => setOpen(true)}>
          <Icon name="search" size={16} />
          <span>Search</span>
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
