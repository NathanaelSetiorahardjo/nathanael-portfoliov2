// src/components/ProjectsArchive.jsx
import { useState, useEffect } from 'react';
import { projectData } from '../data/projects';

export default function ProjectsArchive() {
  const [filter, setFilter] = useState('all');

  useEffect(() => window.scrollTo(0, 0), []);

  const filteredProjects =
    filter === 'all' ? projectData : projectData.filter((p) => p.category === filter);

  return (
    <section className="archive section page-top-offset">
      <div className="container">
        <div className="archive-header">
          <h1 className="archive-title">Complete Project Archive</h1>
          <p className="archive-subtitle">Filter by research, engineering, and design.</p>
        </div>

        <div className="segmented-control">
          <button
            className={`segment-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Work
          </button>
          <button
            className={`segment-btn ${filter === 'ai-research' ? 'active' : ''}`}
            onClick={() => setFilter('ai-research')}
          >
            AI & Research
          </button>
          <button
            className={`segment-btn ${filter === 'engineering' ? 'active' : ''}`}
            onClick={() => setFilter('engineering')}
          >
            Engineering
          </button>
        </div>

        <div className="bento-grid">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0 && filter === 'all';

            return (
              <div
                key={project.id}
                className={`bento-card ${isFeatured ? 'featured-bento' : ''}`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <div className="bento-image-wrapper">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="bento-image"
                      loading="lazy"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                  )}
                </div>

                <div className="bento-content">
                  <span className="bento-role">{project.role}</span>
                  <h3 className="bento-heading">{project.title}</h3>
                  <p className="bento-desc">{project.challenge}</p>

                  <div className="bento-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="project-links-row">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="project-ext-link"
                        >
                          {link.name} <i className="fas fa-external-link-alt"></i>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}