// src/components/ContactPage.jsx
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('nathanael.setiorahardjo@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="section page-top-offset contact-section">
      <div className="container contact-container">
        <h1 className="contact-heading">Let&apos;s Talk.</h1>
        <p className="contact-subtext">
          Whether you are looking to collaborate on AI research, build a new product, or just want
          to connect, my inbox is always open.
        </p>

        <div className="contact-actions">
          <button
            onClick={handleCopyEmail}
            className={`btn btn-lg ${copied ? 'btn-copied' : 'btn-primary'}`}
          >
            {copied ? (
              <>
                Email copied to clipboard! <i className="fas fa-check"></i>
              </>
            ) : (
              <>
                Copy Email <i className="fas fa-copy"></i>
              </>
            )}
          </button>

          <a
            href="/Nathanael_Setiorahardjo_CV.pdf"
            download="Nathanael_Setiorahardjo_CV.pdf"
            className="btn btn-lg btn-secondary"
          >
            Download CV <i className="fas fa-file-download"></i>
          </a>
        </div>

        <div className="contact-socials">
          <a
            href="https://www.linkedin.com/in/nathanael-setiorahardjo/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <i className="fab fa-linkedin" style={{ color: '#0a66c2' }}></i> LinkedIn
          </a>
          <a
            href="https://github.com/NathanaelSetiorahardjo"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://instagram.com/nathanael_setiorahardjo"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <i className="fab fa-instagram" style={{ color: '#e1306c' }}></i> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}