// src/data/navigation.js
// The site as a file tree. Each page is a "file" in the explorer, tabs and status bar.
// `type` picks the coloured badge next to the file name (see .file-badge in index.css).
import { projectData } from './projects';

export const navItems = [
  { to: '/', label: 'Home', file: 'nathanael.ts', type: 'ts', icon: 'home' },
  { to: '/projects', label: 'Projects', file: 'projects/', type: 'dir', icon: 'folder' },
  { to: '/leadership', label: 'Leadership', file: 'leadership.log', type: 'log', icon: 'users' },
  { to: '/skills', label: 'Skills', file: 'skills.json', type: 'json', icon: 'sliders' },
  { to: '/contact', label: 'Contact', file: 'contact.md', type: 'md', icon: 'mail' },
];

export const projectFile = (project) => `${project.id}.md`;

// Which file a URL shows. Unknown URLs become 404.md.
export function fileForPath(pathname) {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  if (match) {
    const project = projectData.find((p) => p.id === match[1]);
    if (project) return { to: pathname, file: projectFile(project), type: 'md', dir: 'projects' };
  }
  const item = navItems.find((n) => n.to === pathname || `${n.to}/` === pathname);
  if (item) return { to: item.to, file: item.file, type: item.type, dir: null };
  return { to: pathname, file: '404.md', type: 'md', dir: null };
}
