// src/components/ContactPage.jsx
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('nathanael.setiorahardjo@gmail.com');
    setCopied(true);
    
    // Reset the button after 3 seconds
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        
        <h1 style={{ fontSize: 'clamp(4rem, 6vw, 6rem)', fontWeight: '800', lineHeight: '1', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          Let's Talk.
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 4rem auto', lineHeight: '1.6' }}>
          Whether you are looking to collaborate on AI research, build a new product, or just want to connect, my inbox is always open.
        </p>
        
        {/* Buttons Group */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '4rem', flexWrap: 'wrap' }}>
          
          {/* Copy to Clipboard Button */}
          <button 
            onClick={handleCopyEmail}
            className="btn" 
            style={{ 
              background: copied ? '#10b981' : 'var(--text-primary)', // Turns emerald green when copied
              color: copied ? '#ffffff' : 'var(--primary-bg)', 
              padding: '1.2rem 3rem', 
              fontSize: '1.2rem', 
              borderRadius: '50px', 
              border: 'none',
              cursor: 'pointer',
              fontWeight: '700',
              boxShadow: '0 10px 30px var(--shadow-light)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => { if(!copied) { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.opacity = '0.9'; } }}
            onMouseOut={(e) => { if(!copied) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.opacity = '1'; } }}
          >
            {copied ? (
              <>Email copied to clipboard! <i className="fas fa-check" style={{ marginLeft: '12px' }}></i></>
            ) : (
              <>Copy Email <i className="fas fa-copy" style={{ marginLeft: '12px' }}></i></>
            )}
          </button>

          {/* Download CV Button */}
          <a 
            href="/Nathanael_Setiorahardjo_CV.pdf" 
            download="Nathanael_Setiorahardjo_CV.pdf"
            className="btn" 
            style={{ 
              background: 'var(--secondary-bg)', 
              color: 'var(--text-primary)', 
              padding: '1.2rem 3rem', 
              fontSize: '1.2rem', 
              borderRadius: '50px', 
              textDecoration: 'none', 
              fontWeight: '700',
              border: '1px solid var(--border-color)',
              transition: 'transform 0.2s ease, background 0.2s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'var(--shape-color)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--secondary-bg)'; }}
          >
            Download CV <i className="fas fa-file-download" style={{ marginLeft: '12px' }}></i>
          </a>
        </div>

        {/* Social Links Grid */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://www.linkedin.com/in/nathanael-setiorahardjo/" target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--secondary-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', backdropFilter: 'var(--glass-blur)' }}>
            <i className="fab fa-linkedin" style={{ color: '#0a66c2' }}></i> LinkedIn
          </a>
          <a href="https://github.com/NathanaelSetiorahardjo" target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--secondary-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', backdropFilter: 'var(--glass-blur)' }}>
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://instagram.com/nathanael_setiorahardjo" target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--secondary-bg)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', backdropFilter: 'var(--glass-blur)' }}>
            <i className="fab fa-instagram" style={{ color: '#e1306c' }}></i> Instagram
          </a>
        </div>

      </div>
    </section>
  );
}