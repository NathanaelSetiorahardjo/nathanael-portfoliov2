// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        
        {/* Universal Download CV Button */}
        <a 
          href="/Nathanael_Setiorahardjo_CV.pdf" 
          download="Nathanael_Setiorahardjo_CV.pdf"
          className="btn" 
          style={{ background: 'var(--text-primary)', color: 'var(--primary-bg)', padding: '0.8rem 2rem', fontSize: '1rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', transition: 'transform 0.2s ease' }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          Download CV <i className="fas fa-file-download" style={{ marginLeft: '8px' }}></i>
        </a>

        {/* Minimalist Social Icons */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center' }}>
          <a 
            href="https://www.linkedin.com/in/nathanael-setiorahardjo/" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s ease, transform 0.2s ease' }} 
            onMouseOver={(e) => { e.currentTarget.style.color = '#0a66c2'; e.currentTarget.style.transform = 'translateY(-3px)'; }} 
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://github.com/NathanaelSetiorahardjo" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s ease, transform 0.2s ease' }} 
            onMouseOver={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} 
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://instagram.com/nathanael_setiorahardjo" 
            target="_blank" 
            rel="noreferrer" 
            style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s ease, transform 0.2s ease' }} 
            onMouseOver={(e) => { e.currentTarget.style.color = '#e1306c'; e.currentTarget.style.transform = 'translateY(-3px)'; }} 
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Nathanael Setiorahardjo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}