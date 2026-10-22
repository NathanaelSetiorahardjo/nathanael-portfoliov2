// src/components/projects/ProjectCard.jsx
// A project as an editor panel. The whole card links to the project's file.
import { Link } from 'react-router-dom';
import { projectFile } from '../../data/navigation';
import FileBadge from '../ui/FileBadge';
import { trackSpotlight } from '../ui/Spotlight';
import ProjectMedia from './ProjectMedia';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card spotlight" onPointerMove={trackSpotlight}>
      <p className="panel-bar">
        <FileBadge type="md" />
        {projectFile(project)}
      </p>
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
