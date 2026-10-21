// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Sync theme attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle navbar scroll glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change (adjusted during render, not in an effect)
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setIsMenuOpen(false);
  }

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link to="/" className="nav-brand" aria-label="Home">
          <div className="logo-circle">
            <span className="logo-text">NS</span>
          </div>
        </Link>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/projects" className={location.pathname.includes('/projects') ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/leadership" className={location.pathname === '/leadership' ? 'active' : ''}>Leadership</Link></li>
          <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>

        <div className="nav-tools">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
            <div className="toggle-switch">
              <div className="toggle-slider"></div>
            </div>
          </button>
          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}