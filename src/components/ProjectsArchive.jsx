// src/components/ProjectsArchive.jsx
import { useState, useEffect } from 'react';
import gestitalkThumbnail from '../assets/gestitalk-thumbnail.jpg';
import instockThumbnail from '../assets/instock-thumbnail.jpg';
import medcheckThumbnail from '../assets/medcheck-thumbnail.jpg';
import barberhubThumbnail from '../assets/barberhub-thumbnail.jpg';


const projectData = [
  {
    id: 'gestitalk',
    category: 'ai-research',
    image: gestitalkThumbnail, 
    role: 'Team Leader & Lead Developer',
    title: 'GestiTalk 2.0',
    challenge: 'An AI-powered web application that translates full-word Indonesian Sign Language (BISINDO) into text in real-time to bridge communication gaps for the deaf and hard-of-hearing community.',
    tags: ['AI/ML', 'Computer Vision', 'Real-time Translation'],
    links: [
      { name: 'Github', url: 'https://github.com/NathanaelSetiorahardjo/KYGB-SFT-GestiTalk' }, 
      { name: 'Deploy', url: 'https://gisti-talk-sft-2025.vercel.app/' },
      { name: 'Video', url: 'https://www.youtube.com/watch?v=5QhLJTIkV_s' },
      { name: 'News', url: 'https://inet.detik.com/cyberlife/d-8505431/mahasiswa-alumni-samsung-sft-bikin-ai-bahasa-isyarat-untuk-teman-tuli?page=2' }
    ]
  },
  {
    id: 'instock',
    category: 'ai-research',
    image: instockThumbnail, 
    role: 'UI/UX Lead',
    title: 'InStock',
    challenge: 'A web platform that runs Indonesian financial news through a 5-model NLP ensemble (SVM, BiLSTM, DistilBERT, RoBERTa, and XLM-RoBERTa) to map economic impact.',
    tags: ['NLP', 'Transformers', 'FastAPI', 'React'],
    links: [
      { name: 'Github', url: 'https://github.com/NathanaelSetiorahardjo/KYGB-SFT-InStock' },
      { name: 'Deploy', url: 'https://instock-sft-2025.vercel.app/' }
    ]
  },
  {
    id: 'medcheck',
    category: 'engineering', 
    image: medcheckThumbnail, 
    role: 'Team Leader',
    title: 'MedCheck - Helia',
    challenge: 'An AI health companion built on the Gemini API that actively clarifies symptoms and translates complex medicine labels into plain-language summaries using OCR.',
    tags: ['Gemini API', 'Azure Cloud OCR', 'Prompt Engineering'],
    links: [
      { name: 'Github', url: 'https://github.com/NathanaelSetiorahardjo/KYGB-SFT-MedCheck' }, 
      { name: 'Deploy', url: 'https://medcheck-sft-2025.vercel.app/' },
      { name: 'Video Demo', url: 'https://www.youtube.com/watch?v=5QhLJTIkV_s' }
    ]
  },
  {
    id: 'barberhub',
    category: 'engineering',
    image: barberhubThumbnail, 
    role: 'UI Developer & SDLC Coordinator',
    title: 'BarberHub',
    challenge: 'A barber booking app with role-based access, real-time data sync, and double-booking prevention built with a strict Waterfall SDLC.',
    tags: ['System Architecture', 'UI/UX', 'Requirements Engineering'],
    links: [
      { name: 'Github', url: 'https://github.com/NathanaelSetiorahardjo/KYGB-SFT-BarberHub' }, 
      { name: 'Deploy', url: 'https://barberhub-sft-2025.vercel.app/' },
      { name: 'Video Demo', url: 'https://www.youtube.com/watch?v=5QhLJTIkV_s' }
    ]
  }
];

export default function ProjectsArchive() {
  const [filter, setFilter] = useState('all');

  useEffect(() => window.scrollTo(0, 0), []);

  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <section className="archive section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        
        <div className="archive-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="archive-title" style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: '800' }}>Complete Project Archive</h2>
          <p className="archive-subtitle" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Filter by research, engineering, and design.</p>
        </div>

        <div className="segmented-control" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <button className={`segment-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Work</button>
          <button className={`segment-btn ${filter === 'ai-research' ? 'active' : ''}`} onClick={() => setFilter('ai-research')}>AI & Research</button>
          <button className={`segment-btn ${filter === 'engineering' ? 'active' : ''}`} onClick={() => setFilter('engineering')}>Engineering</button>
        </div>

        <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredProjects.map((project, index) => {
            // The first item in the "All Work" view gets the featured layout
            const isFeatured = index === 0 && filter === 'all';
            
            return (
              <div 
                key={project.id} 
                className={isFeatured ? 'featured-bento' : ''} 
                style={{ 
                  display: 'flex', 
                  // If it's the featured card, sit side-by-side. Otherwise, stack vertically.
                  flexDirection: isFeatured ? 'row' : 'column', 
                  flexWrap: isFeatured ? 'wrap' : 'nowrap',
                  gap: isFeatured ? '3rem' : '0',
                  animationDelay: `${index * 30}ms`, 
                  background: 'var(--secondary-bg)', 
                  padding: isFeatured ? '3rem' : '2rem', 
                  borderRadius: '24px', 
                  border: '1px solid var(--border-color)', 
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  // Ensure the featured card takes up the full row in the grid
                  gridColumn: isFeatured ? '1 / -1' : 'auto'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="bento-image-wrapper" style={{ 
                  flex: isFeatured ? '1 1 400px' : 'none',
                  marginBottom: isFeatured ? '0' : '1.5rem', 
                  borderRadius: '12px', 
                  overflow: 'hidden', 
                  background: 'var(--shape-color)', 
                  height: isFeatured ? '100%' : '200px',
                  minHeight: '200px'
                }}>
                  {project.image ? (
                      <img src={project.image} alt={project.title} className="bento-image" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : null}
                </div>
                
                <div className="bento-content" style={{ 
                  flex: isFeatured ? '1 1 350px' : '1', 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <span className="bento-role" style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.role}</span>
                  <h3 className="bento-heading" style={{ fontSize: isFeatured ? '2.5rem' : '1.5rem', fontWeight: '800', margin: '0.5rem 0 1rem 0' }}>{project.title}</h3>
                  <p className="bento-desc" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '1.5rem' }}>{project.challenge}</p>
                  
                  <div className="bento-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tags.map(tag => (
                      <span key={tag} className="tech-tag" style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-secondary)', border: '1px solid var(--border-color)', padding: '0.3rem 0.8rem', borderRadius: '50px' }}>{tag}</span>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                    {project.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer" 
                        style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'color 0.2s ease' }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                      >
                        {link.name} <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem' }}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}