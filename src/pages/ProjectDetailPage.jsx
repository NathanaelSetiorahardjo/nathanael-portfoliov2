// src/pages/ProjectDetailPage.jsx
// A project's full spec sheet. Esc or the back button returns to the list.
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { projectCategories, projectData } from '../data/projects';
import { usePageTitle } from '../hooks/usePageTitle';
import ProjectMedia from '../components/projects/ProjectMedia';
import Icon from '../components/ui/Icon';
import NotFoundPage from './NotFoundPage';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectData.find((p) => p.id === id);
  usePageTitle(project?.title ?? 'Not found');

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && !document.querySelector('[cmdk-dialog]')) navigate('/projects', { viewTransition: true });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  if (!project) return <NotFoundPage />;
  const category = projectCategories.find((c) => c.id === project.category);

  return (
    <article className="section page-top container spec">
      <Link to="/projects" viewTransition className="back-link">
        <Icon name="arrow-left" size={18} /> All projects
      </Link>

      <div className="spec-sheet card">
        <ProjectMedia project={project} className="spec-media" eager />
        <div className="spec-body">
          <h1 className="page-title" style={{ viewTransitionName: `project-title-${project.id}` }}>
            {project.title}
          </h1>
          <dl className="spec-table">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Area</dt>
              <dd>{category?.label}</dd>
            </div>
          </dl>
          <p className="spec-desc">{project.challenge}</p>
          <h2 className="spec-subtitle">Built with</h2>
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
          {project.links.length > 0 && (
            <>
              <h2 className="spec-subtitle">Links</h2>
              <ul className="spec-links">
                {project.links.map((link) => (
                  <li key={link.url}>
                    <a className="btn btn-secondary btn-small" href={link.url} target="_blank" rel="noreferrer">
                      {link.name} <Icon name="external" size={16} />
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
