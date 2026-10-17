// src/components/Work.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projects';

const featuredProjects = projectData.filter((p) => p.featured);

export default function Work() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-header-row">
          <div>
            <h2 className="section-heading-left">Featured Work</h2>
            <p className="section-subtitle-left">
              Select case studies highlighting AI integration and product design.
            </p>
          </div>
          <Link to="/projects" className="btn btn-secondary">
            View Full Archive <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="work-carousel-viewport">
          <div
            className="work-carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {featuredProjects.map((project) => (
              <div key={project.id} className="work-slide">
                <div className="work-slide-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                </div>

                <div className="work-slide-content">
                  <span className="bento-role">{project.role}</span>
                  <h3 className="work-slide-title">{project.title}</h3>
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
            ))}
          </div>

          <button onClick={prevSlide} className="carousel-nav-btn prev" aria-label="Previous slide">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={nextSlide} className="carousel-nav-btn next" aria-label="Next slide">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-pagination">
          {featuredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`carousel-dot ${current === idx ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}