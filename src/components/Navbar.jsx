// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Gets the current URL path

  // 1. Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. THE FIX: Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <div className="logo-circle"><span className="logo-text">NS</span></div>
        </Link>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/projects" className={location.pathname.includes('/projects') ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/leadership" className={location.pathname === '/leadership' ? 'active' : ''}>Leadership</Link></li>
          <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>

        <div className="nav-tools">
          <button className="theme-toggle" onClick={toggleTheme}>
            <div className="toggle-switch"><div className="toggle-slider"></div></div>
          </button>
          <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}