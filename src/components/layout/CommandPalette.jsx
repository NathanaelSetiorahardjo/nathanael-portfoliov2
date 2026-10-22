// src/components/layout/CommandPalette.jsx
// Cmd/Ctrl+K palette (cmdk). Everything here is also reachable by a normal link.
import { useNavigate } from 'react-router-dom';
import { Command } from 'cmdk';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import { projectData } from '../../data/projects';
import { useCopyEmail } from '../../hooks/useCopyEmail';
import { usePalette } from '../../hooks/usePalette';
import { useTheme } from '../../hooks/useTheme';
import Icon from '../ui/Icon';

export default function CommandPalette() {
  const { open, setOpen } = usePalette();
  const { theme, toggleTheme } = useTheme();
  const copyEmail = useCopyEmail();
  const navigate = useNavigate();

  const run = (action) => () => {
    setOpen(false);
    action();
  };
  const go = (to) => run(() => navigate(to, { viewTransition: true }));

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      overlayClassName="palette-overlay"
      contentClassName="palette"
    >
      <div className="palette-input-row">
        <Icon name="search" size={18} />
        <Command.Input placeholder="Type a command or search…" />
        <kbd>esc</kbd>
      </div>
      <Command.List>
        <Command.Empty>No results. Try “projects” or “cv”.</Command.Empty>

        <Command.Group heading="Go to">
          {navItems.map((item) => (
            <Command.Item key={item.to} value={`go ${item.label}`} onSelect={go(item.to)}>
              <Icon name={item.icon} size={18} />
              {item.label}
              <span className="palette-hint">{item.file}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Projects">
          {projectData.map((p) => (
            <Command.Item key={p.id} value={`open ${p.title} ${p.tags.join(' ')}`} onSelect={go(`/projects/${p.id}`)}>
              <Icon name="folder" size={18} />
              {p.title}
              <span className="palette-hint">{p.role}</span>
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Actions">
          <Command.Item
            value="download cv resume"
            onSelect={run(() => {
              const a = document.createElement('a');
              a.href = profile.cv.href;
              a.download = profile.cv.filename;
              a.click();
            })}
          >
            <Icon name="download" size={18} />
            Download CV
          </Command.Item>
          <Command.Item value="copy email contact" onSelect={run(copyEmail)}>
            <Icon name="copy" size={18} />
            Copy email address
          </Command.Item>
          <Command.Item value="toggle theme dark light" onSelect={run(toggleTheme)}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
            Switch to {theme === 'dark' ? 'light' : 'dark'} theme
          </Command.Item>
          {profile.socials.map((s) => (
            <Command.Item key={s.id} value={`open ${s.name}`} onSelect={run(() => window.open(s.url, '_blank', 'noopener'))}>
              <Icon name={s.id} size={18} />
              Open {s.name}
              <span className="palette-hint">new tab</span>
            </Command.Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
