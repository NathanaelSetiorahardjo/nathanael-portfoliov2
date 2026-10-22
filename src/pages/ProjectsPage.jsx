// src/pages/ProjectsPage.jsx
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { projectCategories, projectData, projectsCopy } from '../data/projects';
import { usePageTitle } from '../hooks/usePageTitle';
import ProjectCard from '../components/projects/ProjectCard';

export default function ProjectsPage() {
  usePageTitle('Projects');
  const [params, setParams] = useSearchParams();
  const current = projectCategories.some((c) => c.id === params.get('c')) ? params.get('c') : 'all';
  const shown = current === 'all' ? projectData : projectData.filter((p) => p.category === current);

  return (
    <section className="section page-top container">
      <h1 className="page-title">{projectsCopy.heading}</h1>
      <p className="section-intro">{projectsCopy.intro}</p>

      <div className="folder-tabs" role="group" aria-label="Filter projects">
        {projectCategories.map((c) => (
          <button
            key={c.id}
            type="button"
            className="folder-tab"
            aria-pressed={current === c.id}
            onClick={() => setParams(c.id === 'all' ? {} : { c: c.id }, { replace: true })}
          >
            {current === c.id && (
              <motion.span layoutId="folder-active" className="folder-tab-bg" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />
            )}
            <span className="folder-tab-label">{c.label}</span>
          </button>
        ))}
      </div>

      <p className="result-count" aria-live="polite">
        {shown.length} {shown.length === 1 ? 'project' : 'projects'}
      </p>

      <motion.div layout className="card-grid">
        {shown.map((p) => (
          <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 380, damping: 32 }}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
