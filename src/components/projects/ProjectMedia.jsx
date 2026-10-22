// src/components/projects/ProjectMedia.jsx
// A project's screenshot, or its pixel drawing when there is no screenshot.
// `viewTransitionName` lets the card image morph into the detail page image.
import ProjectIllustration from './ProjectIllustration';

export default function ProjectMedia({ project, className = '', eager = false }) {
  const style = { viewTransitionName: `project-media-${project.id}` };
  return (
    <div className={`project-media ${className}`} style={style}>
      {project.image ? (
        <img src={project.image} alt="" loading={eager ? 'eager' : 'lazy'} decoding="async" />
      ) : (
        <ProjectIllustration name={project.illustration} title={project.title} />
      )}
    </div>
  );
}
