// src/components/home/WorkbenchDiagram.jsx
// Home page signature: a blueprint of the three things Nathanael works on.
// Hovering or focusing a module lights its wire back to the centre; clicking opens it.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { leadershipData } from '../../data/leadership';
import { projectData } from '../../data/projects';
import Icon from '../ui/Icon';
import PixelMascot from '../ui/PixelMascot';

const count = (category) => projectData.filter((p) => p.category === category).length;

// Positions are percentages of the diagram box; wires are elbows from the centre.
const modules = [
  {
    id: 'ai',
    title: 'AI & research',
    detail: `${count('ai-research')} projects`,
    icon: 'zap',
    to: '/projects?c=ai-research',
    x: 20,
    y: 18,
    wire: 'M50 50 V34 H20 V26',
  },
  {
    id: 'builds',
    title: 'Engineering',
    detail: `${count('engineering')} projects`,
    icon: 'sliders',
    to: '/projects?c=engineering',
    x: 80,
    y: 18,
    wire: 'M50 50 V34 H80 V26',
  },
  {
    id: 'ensemble',
    title: 'Leadership',
    detail: `${leadershipData.length} roles`,
    icon: 'users',
    to: '/leadership',
    x: 50,
    y: 86,
    wire: 'M50 62 V78',
  },
];

export default function WorkbenchDiagram() {
  const [active, setActive] = useState(null);

  return (
    <figure className="workbench window" aria-label="What I work on">
      <figcaption className="window-bar">
        <span className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        workbench.svg
      </figcaption>

      <div className="workbench-canvas">
        <svg className="workbench-wires" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {modules.map((m) => (
            <g key={m.id}>
              <path d={m.wire} className="wire" vectorEffect="non-scaling-stroke" />
              <motion.path
                d={m.wire}
                className="wire wire-live"
                vectorEffect="non-scaling-stroke"
                initial={false}
                animate={{ pathLength: active === m.id ? 1 : 0, opacity: active === m.id ? 1 : 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </g>
          ))}
        </svg>

        <div className="workbench-core" style={{ left: '50%', top: '56%' }}>
          <span className="mascot-tile mascot-tile-large">
            <PixelMascot size={56} />
          </span>
        </div>

        {modules.map((m) => (
          <Link
            key={m.id}
            to={m.to}
            viewTransition
            className={`module${active === m.id ? ' is-active' : ''}`}
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
            onPointerEnter={() => setActive(m.id)}
            onPointerLeave={() => setActive(null)}
            onFocus={() => setActive(m.id)}
            onBlur={() => setActive(null)}
          >
            <Icon name={m.icon} size={20} />
            <span className="module-title">{m.title}</span>
            <span className="module-detail">{m.detail}</span>
          </Link>
        ))}
      </div>
    </figure>
  );
}
