// src/components/Leadership.jsx
import { useEffect } from 'react';
import chairmanThumbnail from '../assets/bdm-group-photo.JPG';
import gsaThumbnail from '../assets/gsa-thumbnail.jpg';
import cbThumbnail from '../assets/codebar-thumbnail.jpg';
import fypThumbnail from '../assets/fyp-thumbnail.jpg';
import bnecThumbnail from '../assets/bnec-thumbnail.jpg';

const leadershipData = [
  {
    id: 'bdm',
    title: 'Chairman',
    org: 'Bersama Dalam Musik (BDM)',
    date: 'Nov 2025 – Present',
    image: chairmanThumbnail, 
    link: { 
      name: '@ukm_bdm', 
      url: 'https://www.instagram.com/ukm_bdm/', 
      icon: 'fab fa-instagram' 
    },
    bullets: [
      "Led a cross-functional student music organization of 30 members across 5 divisions.",
      "Overhauled BDM's operational foundation, introducing the first SOP and archive system.",
      "Restored university standing, repaired cross-organizational relationships, and grew active player turnout to a record-high of 35.",
      "Restructured administrative responsibilities with the executive team (Nobertus & Rafael Shira) to commit to a modern orchestra identity."
    ]
  },
  {
    id: 'gsa',
    title: 'Google Student Ambassador',
    org: 'GSA 2026 Program',
    date: 'April 2026 – Present',
    image: gsaThumbnail, 
    bullets: [
      "Representing BINUS University in the highly competitive GSA 2026 cycle.",
      "Creating and managing tech-focused content as part of the ambassador program."
    ]
  },
  {
    id: 'codebar',
    title: 'Calculus Tutor',
    org: 'Code Bar Boot Camp',
    date: 'Feb 2026 – June 2026',
    image: cbThumbnail, 
    bullets: [
      "Served as a Junior Tutor, teaching Calculus via Zoom to a class of 25 students.",
      "Summarized and curated comprehensive learning materials across 6 sessions.",
      "Mentored students and guided exam preparation for Midterm and Final Calculus exams."
    ]
  },
  {
    id: 'fyp',
    title: 'Freshmen Leader & Partner',
    org: 'First Year Program (FYP)',
    date: 'Sep 2024 – June 2026',
    image: fypThumbnail, 
    bullets: [
      "Mentored and supported 10 freshmen throughout the program to help them adapt academically and socially.",
      "Facilitated learning sessions and delivered materials to over 60 freshmen during an 8-day orientation."
    ]
  },
  {
    id: 'bnec',
    title: 'English Tutor',
    org: 'Bina Nusantara English Community',
    date: 'Oct 2025 – Jan 2026',
    image: bnecThumbnail, 
    bullets: [
      "Conducted TOEFL preparation sessions for classes of 7-8 students.",
      "Enhanced student English proficiency and test readiness through a structured curriculum."
    ]
  }
];

export default function Leadership() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', margin: '0 auto 4rem auto' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1rem' }}>Leadership & Community</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
            Building teams, shaping culture, and driving operational excellence across campus organizations.
          </p>
        </div>

        {/* Cinematic List Layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {leadershipData.map((item) => (
            <div 
              key={item.id} 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                background: 'var(--secondary-bg)', 
                borderRadius: '24px', 
                overflow: 'hidden',
                border: '1px solid var(--border-color)',
                boxShadow: '0 20px 40px var(--shadow-light)'
              }}
            >
              {/* Massive Cover Photo for each Role */}
              <div style={{ width: '100%', height: '350px', background: 'var(--shape-color)', position: 'relative' }}>
                <img 
                  src={item.image} 
                  alt={item.org} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => e.target.style.display = 'none'} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--primary-bg) 0%, transparent 50%)', opacity: 0.8 }}></div>
              </div>

              {/* Content Area */}
              <div style={{ padding: '3rem', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h2 style={{ fontSize: '2.2rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{item.title}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <h3 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', fontWeight: '700', margin: 0 }}>{item.org}</h3>
                      
                      {/* Optional Link Rendering (Like the Instagram Button) */}
                      {item.link && (
                        <a 
                          href={item.link.url} 
                          target="_blank" 
                          rel="noreferrer" 
                          style={{ 
                            fontSize: '0.85rem', 
                            fontWeight: '600', 
                            color: 'var(--text-primary)', 
                            background: 'var(--shape-color)',
                            padding: '0.3rem 0.8rem', 
                            borderRadius: '50px', 
                            textDecoration: 'none', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.4rem', 
                            border: '1px solid var(--border-color)',
                            transition: 'color 0.2s ease, border-color 0.2s ease' 
                          }}
                          onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent-color)'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }}
                          onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                        >
                          <i className={item.link.icon}></i> {item.link.name}
                        </a>
                      )}
                    </div>
                  </div>
                  <span style={{ background: 'var(--shape-color)', color: 'var(--text-primary)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '700', border: '1px solid var(--border-color)' }}>
                    {item.date}
                  </span>
                </div>
                
                <ul style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: 0 }}>
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}