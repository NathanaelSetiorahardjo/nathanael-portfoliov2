// src/components/layout/ActivityBar.jsx
// The thin icon column on the far left (desktop only).
import { Link } from 'react-router-dom';
import { profile } from '../../data/profile';
import { usePalette } from '../../hooks/usePalette';
import Icon from '../ui/Icon';
import PixelMascot from '../ui/PixelMascot';

export default function ActivityBar({ explorerOpen, onToggleExplorer }) {
  const { setOpen } = usePalette();
  const github = profile.socials.find((s) => s.id === 'github');

  return (
    <nav className="activitybar" aria-label="Tools">
      <Link to="/" viewTransition className="activity-avatar" aria-label="Home">
        <PixelMascot size={28} />
      </Link>
      <button
        type="button"
        className="activity-button"
        aria-pressed={explorerOpen}
        aria-label={explorerOpen ? 'Hide file explorer' : 'Show file explorer'}
        onClick={onToggleExplorer}
      >
        <Icon name="folder" size={22} />
      </button>
      <button type="button" className="activity-button" aria-label="Search files and actions" onClick={() => setOpen(true)}>
        <Icon name="search" size={22} />
      </button>
      <span className="activity-spacer" />
      {github && (
        <a className="activity-button" href={github.url} target="_blank" rel="noreferrer" aria-label="GitHub profile">
          <Icon name="github" size={22} />
        </a>
      )}
    </nav>
  );
}
