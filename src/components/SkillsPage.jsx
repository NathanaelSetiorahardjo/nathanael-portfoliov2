// src/components/SkillsPage.jsx
import { useEffect } from 'react';

export default function SkillsPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  // Updated with exact skills from your CV
  const skillCategories = [
    {
      title: "AI & Engineering",
      icon: "fas fa-brain",
      skills: ["Python", "PyTorch / TensorFlow", "Computer Vision", "NLP", "Hugging Face", "React", "FastAPI", "Node.js", "C++ / Java"] 
    },
    {
      title: "Strategy & Management",
      icon: "fas fa-tasks",
      skills: ["Team Leadership", "Scrum Master", "Project Management", "SOP Development", "Strategic Planning", "Task Delegation"] 
    },
    {
      title: "Communication & Context",
      icon: "fas fa-globe",
      skills: ["English (Proficient - IELTS)", "Indonesian (Native)", "Chinese (Basic, YCT 4)", "Mentorship", "Public Speaking"] 
    },
    {
      title: "Design & Tooling",
      icon: "fas fa-tools",
      skills: ["Figma / Canva", "UI/UX Design", "Git / GitHub", "MySQL", "Tailwind CSS", "HTML / CSS"] 
    }
  ];

  return (
    <section className="section" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', margin: '0 auto 4rem auto', maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1rem' }}>Skills & Expertise</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            A holistic view of my capabilities, spanning advanced artificial intelligence research, full-stack development, and organizational leadership.
          </p>
        </div>

        {/* The Grid: Forced to 2x2 via inline styling */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '2rem' 
        }}>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              style={{ 
                animationDelay: `${index * 150}ms`,
                background: 'var(--secondary-bg)',
                backdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--border-color)',
                borderRadius: '24px',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                <i className={category.icon} style={{ fontSize: '1.8rem', color: 'var(--accent-color)' }}></i>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>{category.title}</h3>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'var(--text-secondary)',
                      background: 'var(--shape-color)',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid transparent',
                      transition: 'all 0.2s ease',
                      cursor: 'default'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.borderColor = 'var(--accent-color)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}