// src/pages/ProjectDetailPage.jsx
// projects/<id>.md: front matter, photo, description and links. Esc returns to the list.
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { projectCategories, projectData } from '../data/projects';
import { usePageTitle } from '../hooks/usePageTitle';
import ProjectMedia from '../components/projects/ProjectMedia';
import Icon from '../components/ui/Icon';
import NotFoundPage from './NotFoundPage';

function FrontMatter({ rows }) {
  return (
    <dl className="front-matter">
      <span className="fm-fence" aria-hidden="true">
        ---
      </span>
      {rows.map(([key, value]) => (
        <div key={key} className="fm-row">
          <dt className="tok-prop">{key}</dt>
          <dd>{value}</dd>
        </div>
      ))}
      <span className="fm-fence" aria-hidden="true">
        ---
      </span>
    </dl>
  );
}

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
    <article className="page-top detail">
      <Link to="/projects" viewTransition className="back-link">
        <Icon name="arrow-left" size={18} /> All projects
        <kbd>esc</kbd>
      </Link>

      <h1 className="page-title" style={{ viewTransitionName: `project-title-${project.id}` }}>
        <span className="md-mark" aria-hidden="true">
          #
        </span>
        {project.title}
      </h1>

      <FrontMatter
        rows={[
          ['role', project.role],
          ['area', category?.label],
          ['stack', project.tags.join(', ')],
        ]}
      />

      <ProjectMedia project={project} className="detail-media" eager />

      <p className="detail-desc">{project.challenge}</p>

      {project.links.length > 0 && (
        <>
          <h2 className="detail-subtitle">
            <span className="md-mark" aria-hidden="true">
              ##
            </span>
            Links
          </h2>
          <ul className="detail-links">
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
    </article>
  );
}
