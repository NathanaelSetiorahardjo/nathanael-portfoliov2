// src/components/layout/Explorer.jsx
// The file tree (desktop only). Every page and project is one click away.
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { navItems, projectFile } from '../../data/navigation';
import { profile } from '../../data/profile';
import { projectData } from '../../data/projects';
import FileBadge from '../ui/FileBadge';

const spring = { type: 'spring', stiffness: 520, damping: 40 };
const WIDTH = 248; // keep in step with --explorer-w in index.css

function TreeLink({ to, end, depth = 0, type, children }) {
  return (
    <NavLink to={to} end={end} viewTransition className="tree-row" style={{ '--depth': depth }}>
      {({ isActive }) => (
        <>
          {isActive && <motion.span layoutId="tree-active" className="tree-active" transition={spring} />}
          {type && <FileBadge type={type} />}
          <span className="tree-name">{children}</span>
        </>
      )}
    </NavLink>
  );
}

export default function Explorer({ open }) {
  const { pathname } = useLocation();
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [home, projects, ...rest] = navItems;
  const inProjects = pathname.startsWith('/projects');

  return (
    <motion.aside
      className="explorer"
      aria-label="Files"
      initial={false}
      animate={{ width: open ? WIDTH : 0, opacity: open ? 1 : 0 }}
      transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
      inert={!open}
    >
      <div className="explorer-inner">
        <p className="explorer-title">Explorer</p>
        <p className="tree-root">portfolio</p>
        <ul className="tree">
          <li>
            <TreeLink to={home.to} end type={home.type}>
              {home.file}
            </TreeLink>
          </li>
          <li>
            <div className={`tree-folder${inProjects ? ' is-current' : ''}`}>
              <button
                type="button"
                className="tree-toggle"
                aria-expanded={projectsOpen}
                aria-label={projectsOpen ? 'Collapse projects' : 'Expand projects'}
                onClick={() => setProjectsOpen((o) => !o)}
              >
                <motion.span className="tree-chevron" animate={{ rotate: projectsOpen ? 90 : 0 }} transition={spring}>
                  ▸
                </motion.span>
              </button>
              <TreeLink to={projects.to} end>
                {projects.file}
              </TreeLink>
            </div>
            <AnimatePresence initial={false}>
              {projectsOpen && (
                <motion.ul
                  className="tree tree-nested"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {projectData.map((p) => (
                    <li key={p.id}>
                      <TreeLink to={`/projects/${p.id}`} depth={1} type="md">
                        {projectFile(p)}
                      </TreeLink>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {rest.map((item) => (
            <li key={item.to}>
              <TreeLink to={item.to} type={item.type}>
                {item.file}
              </TreeLink>
            </li>
          ))}
          <li>
            <a className="tree-row" href={profile.cv.href} download={profile.cv.filename}>
              <FileBadge type="pdf" />
              <span className="tree-name">CV.pdf</span>
              <span className="tree-hint">download</span>
            </a>
          </li>
        </ul>
      </div>
    </motion.aside>
  );
}
