// src/components/Hero.jsx
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero section" style={{ paddingTop: '12rem', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        
        <div style={{ maxWidth: '800px' }}>
          <span style={{ color: 'var(--accent-color)', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>
            Personal Portfolio 
          </span>
          
          {/* REVERTED TO YOUR ORIGINAL HEADING */}
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.04em', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Hello my name is,<br />
            <span style={{ color: 'var(--accent-color)' }}>Nathanael Setiorahardjo</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6', marginBottom: '3rem' }}>
            Computer Science student specializing in AI research, full-stack architecture, and creating digital products with genuine human impact.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {/* DOWNLOAD CV BUTTON */}
            <a 
              href="/Nathanael_Setiorahardjo_CV.pdf" 
              download="Nathanael_Setiorahardjo_CV.pdf"
              className="btn" 
              style={{ background: 'var(--text-primary)', color: 'var(--primary-bg)', padding: '1rem 2rem', fontSize: '1.1rem', border: 'none', transition: 'transform 0.2s ease, opacity 0.2s ease' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.opacity = '0.9'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; }}
            >
              Download CV <i className="fas fa-file-download" style={{ marginLeft: '8px' }}></i>
            </a>
            
            {/* LINK TO YOUR CONTACT PAGE */}
            <Link 
              to="/contact" 
              className="btn" 
              style={{ background: 'var(--secondary-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '1rem 2rem', fontSize: '1.1rem', transition: 'transform 0.2s ease' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Get in Touch <i className="fas fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}