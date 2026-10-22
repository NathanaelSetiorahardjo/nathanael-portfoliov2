// src/pages/ProjectsPage.jsx
// projects/: every project, filterable by area (?c=ai-research).
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { projectCategories, projectData, projectsCopy } from '../data/projects';
import { usePageTitle } from '../hooks/usePageTitle';
import ProjectCard from '../components/projects/ProjectCard';

const spring = { type: 'spring', stiffness: 420, damping: 36 };

export default function ProjectsPage() {
  usePageTitle('Projects');
  const [params, setParams] = useSearchParams();
  const current = projectCategories.some((c) => c.id === params.get('c')) ? params.get('c') : 'all';
  const shown = current === 'all' ? projectData : projectData.filter((p) => p.category === current);

  return (
    <section className="page-top">
      <h1 className="page-title">{projectsCopy.heading}</h1>
      <p className="section-intro">{projectsCopy.intro}</p>

      <div className="filter" role="group" aria-label="Filter projects">
        {projectCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            className="filter-button"
            aria-pressed={current === c.id}
            onClick={() => setParams(c.id === 'all' ? {} : { c: c.id }, { replace: true })}
          >
            {current === c.id && <motion.span layoutId="filter-active" className="filter-active" transition={spring} />}
            <span className="filter-label">{c.label}</span>
          </button>
        ))}
        <span className="result-count" aria-live="polite">
          {shown.length} {shown.length === 1 ? 'file' : 'files'}
        </span>
      </div>

      <motion.div layout className="card-grid">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1, transition: { ...spring, delay: i * 0.04 } }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.18 } }}
              transition={spring}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
