// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import './index.css';

// Components & Pages
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import ProjectsArchive from './components/ProjectsArchive';
import Leadership from './components/Leadership';
import TechStack from './components/TechStack';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Leadership isPreview={true} />
      <TechStack />
    </>
  );
}

export default function App() {
  return (
    <>
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1"></div>
        <div className="aurora-blob aurora-blob-2"></div>
        <div className="aurora-blob aurora-blob-3"></div>
      </div>

      <div className="noise-overlay"></div>

      <main id="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsArchive />} />
          <Route path="/leadership" element={<Leadership isPreview={false} />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}