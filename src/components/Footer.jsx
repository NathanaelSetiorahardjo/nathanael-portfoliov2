// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <a
          href="/Nathanael_Setiorahardjo_CV.pdf"
          download="Nathanael_Setiorahardjo_CV.pdf"
          className="btn btn-primary"
        >
          Download CV <i className="fas fa-file-download"></i>
        </a>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/nathanael-setiorahardjo/"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link linkedin"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/NathanaelSetiorahardjo"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link github"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://instagram.com/nathanael_setiorahardjo"
            target="_blank"
            rel="noreferrer"
            className="footer-social-link instagram"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Nathanael Setiorahardjo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}