// src/components/Hero.jsx
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-inner">
          <span className="hero-eyebrow">Personal Portfolio</span>

          <h1 className="hero-main-heading">
            Hello my name is,
            <br />
            <span className="accent-text">Nathanael Setiorahardjo</span>
          </h1>

          <p className="hero-subtext">
            Computer Science student specializing in AI research, full-stack architecture, and
            creating digital products with genuine human impact.
          </p>

          <div className="hero-actions">
            <a
              href="/Nathanael_Setiorahardjo_CV.pdf"
              download="Nathanael_Setiorahardjo_CV.pdf"
              className="btn btn-primary"
            >
              Download CV <i className="fas fa-file-download"></i>
            </a>

            <Link to="/contact" className="btn btn-secondary">
              Get in Touch <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}