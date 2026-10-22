// src/components/projects/ProjectCard.jsx
// A blueprint card. The whole card links to the project's spec sheet.
import { Link } from 'react-router-dom';
import ProjectMedia from './ProjectMedia';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <ProjectMedia project={project} />
      <div className="project-card-body">
        <p className="meta">{project.role}</p>
        <h3 className="card-title" style={{ viewTransitionName: `project-title-${project.id}` }}>
          <Link to={`/projects/${project.id}`} viewTransition className="stretched-link">
            {project.title}
          </Link>
        </h3>
        <p className="project-card-desc">{project.challenge}</p>
        <ul className="tags" aria-label="Tools">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
