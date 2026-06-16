// src/components/Work.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import gestitalkThumbnail from '../assets/gestitalk-thumbnail.jpg';
import instockThumbnail from '../assets/instock-thumbnail.jpg';
import medcheckThumbnail from '../assets/medcheck-thumbnail.jpg';
const featuredProjects = [
  {
    id: 'gestitalk',
    title: 'GestiTalk 2.0',
    role: 'Team Leader & Lead Developer',
    desc: 'An AI-powered web application that translates full-word Indonesian Sign Language (BISINDO) into text in real-time. Secured 3rd place nationally in Samsung Solve For Tomorrow 2025.',
    tags: ['AI/ML', 'Computer Vision', 'React'],
    image: gestitalkThumbnail,
    links: [
      { name: 'Git', url: 'INSTOCKLINKHERE' }, 
      { name: 'Deploy', url: 'INSTOCKLINKHERE' },
      { name: 'Video', url: 'INSTOCKLINKHERE' }
    ]
  },
  {
    id: 'instock',
    title: 'InStock',
    role: 'UI/UX Lead',
    desc: 'A financial platform running Indonesian news through a 5-model NLP ensemble (SVM, BiLSTM, DistilBERT, RoBERTa, XLM-RoBERTa) to map economic impact.',
    tags: ['NLP', 'FastAPI', 'Hugging Face'],
    image: instockThumbnail,
    links: [
      { name: 'Git', url: 'INSTOCKLINKHERE' },
      { name: 'Deploy', url: 'INSTOCKLINKHERE' }
    ]
  },
  {
    id: 'medcheck',
    title: 'MedCheck - Helia',
    role: 'Team Leader',
    desc: 'An AI health companion built on the Gemini API that actively clarifies symptoms and translates complex medicine labels into plain-language summaries using OCR.',
    tags: ['Gemini API', 'Azure OCR', 'Prompt Engineering'],
    image: medcheckThumbnail,
    links: [
      { name: 'Git', url: 'INSTOCKLINKHERE' }, 
      { name: 'Deploy', url: 'INSTOCKLINKHERE' },
      { name: 'Video Demo', url: 'INSTOCKLINKHERE' }
    ]
  }
];

export default function Work() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));

  return (
    <section className="section" id="work" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              Featured Work
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '0.5rem' }}>
              Select case studies highlighting AI integration and product design.
            </p>
          </div>
          <Link to="/projects" className="btn" style={{ background: 'var(--shape-color)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
            View Full Archive <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
          </Link>
        </div>

        {/* The Carousel Wrapper */}
        <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: '24px' }}>
          
          {/* Inner Track (Slides left/right based on current index) */}
          <div style={{ 
            display: 'flex', 
            transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)', 
            transform: `translateX(-${current * 100}%)` 
          }}>
            {featuredProjects.map((project) => (
              <div 
                key={project.id} 
                style={{ 
                  minWidth: '100%', /* Each slide takes exactly 100% of container */
                  display: 'flex', 
                  flexDirection: 'row', 
                  flexWrap: 'wrap',
                  gap: '3rem',
                  background: 'var(--secondary-bg)', 
                  padding: '3rem', 
                  border: '1px solid var(--border-color)',
                  boxSizing: 'border-box'
                }}
              >
                {/* Image Container */}
                <div style={{ 
                  flex: '1 1 400px',
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  background: 'var(--shape-color)', 
                  minHeight: '300px'
                }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => e.target.style.display = 'none'} />
                </div>
                
                {/* Content Container */}
                <div style={{ 
                  flex: '1 1 350px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.role}</span>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0.5rem 0 1rem 0', color: 'var(--text-primary)' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', flexGrow: 1, marginBottom: '1.5rem' }}>{project.desc}</p>
                  
                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>{tag}</span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                    {project.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                      >
                        {link.name} <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Navigation Arrows (Desktop) */}
          <button 
            onClick={prevSlide}
            className="carousel-nav-btn"
            style={{ position: 'absolute', top: '50%', left: '1.5rem', transform: 'translateY(-50%)', width: '45px', height: '45px', borderRadius: '50%', background: 'var(--primary-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s, background 0.2s' }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; e.currentTarget.style.background = 'var(--secondary-bg)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; e.currentTarget.style.background = 'var(--primary-bg)'; }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button 
            onClick={nextSlide}
            className="carousel-nav-btn"
            style={{ position: 'absolute', top: '50%', right: '1.5rem', transform: 'translateY(-50%)', width: '45px', height: '45px', borderRadius: '50%', background: 'var(--primary-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', transition: 'transform 0.2s, background 0.2s' }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; e.currentTarget.style.background = 'var(--secondary-bg)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; e.currentTarget.style.background = 'var(--primary-bg)'; }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Pagination Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.8rem', marginTop: '2rem' }}>
          {featuredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: current === idx ? '24px' : '10px',
                height: '10px',
                borderRadius: '10px',
                background: current === idx ? 'var(--accent-color)' : 'var(--text-secondary)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: current === idx ? 1 : 0.4
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}