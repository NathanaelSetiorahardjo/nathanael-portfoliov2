// src/components/TechStack.jsx
import { useEffect, useRef } from 'react';

export default function TechStack() {
  const sectionRef = useRef(null);

  // Trigger the fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const icons = entry.target.querySelectorAll('.tech-icon-wrapper');
            icons.forEach((icon, index) => {
              setTimeout(() => {
                icon.style.opacity = '1';
                icon.style.transform = 'translateY(0)';
              }, index * 100); // Staggered fade-in
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Your exact tech stack from the old image + React
  const techStack = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js-square" },
    { name: "Python", icon: "fab fa-python" },
    { name: "Java", icon: "fab fa-java" },
    { name: "C++", text: "C++" },
    { name: "C", text: "C" },
    { name: "React", icon: "fab fa-react" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "IoT", icon: "fas fa-microchip" },
    { name: "TensorFlow", text: "TF" }
  ];

  return (
    <section className="section" id="tech" ref={sectionRef}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ opacity: 1, transform: 'none', marginBottom: '1rem' }}>My Tech Stack</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>And always eager to learn more.</p>
        </div>

        <div className="tech-icons">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="tech-icon-wrapper"
              style={{ opacity: 0, transform: 'translateY(20px)' }} // Initial hidden state for animation
            >
              {tech.icon ? (
                <i className={tech.icon}></i>
              ) : (
                <span style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  fontFamily: 'monospace',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '64px', /* Matches the ~4rem icon height */
                  filter: 'grayscale(100%) opacity(0.6)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }} className="text-icon">
                  {tech.text}
                </span>
              )}
              <span className="tech-icon-label">{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}