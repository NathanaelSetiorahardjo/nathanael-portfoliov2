// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // <-- Imported About Component
import Work from './components/Work';
import ProjectsArchive from './components/ProjectsArchive';
import Leadership from './components/Leadership';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

// Pages
import LeadershipPage from './components/Leadership'; 
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';

// Stack the landing page components
function LandingPage() {
  return (
    <>
      <Hero />
      <About /> {/* <-- Inserted right after Hero */}
      <Work />
      <Leadership />
      <TechStack />
    </>
  );
}

function App() {
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
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;