// src/components/SkillsPage.jsx
import { useEffect } from 'react';

const skillCategories = [
  {
    title: 'AI & Engineering',
    icon: 'fas fa-brain',
    skills: [
      'Python',
      'PyTorch / TensorFlow',
      'Computer Vision',
      'NLP',
      'Hugging Face',
      'React',
      'FastAPI',
      'Node.js',
      'C++ / Java',
    ],
  },
  {
    title: 'Strategy & Management',
    icon: 'fas fa-tasks',
    skills: [
      'Team Leadership',
      'Scrum Master',
      'Project Management',
      'SOP Development',
      'Strategic Planning',
      'Task Delegation',
    ],
  },
  {
    title: 'Communication & Context',
    icon: 'fas fa-globe',
    skills: [
      'English (Proficient - IELTS)',
      'Indonesian (Native)',
      'Chinese (Basic, YCT 4)',
      'Mentorship',
      'Public Speaking',
    ],
  },
  {
    title: 'Design & Tooling',
    icon: 'fas fa-tools',
    skills: ['Figma / Canva', 'UI/UX Design', 'Git / GitHub', 'MySQL', 'Tailwind CSS', 'HTML / CSS'],
  },
];

export default function SkillsPage() {
  useEffect(() => {
  window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section page-top-offset">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="archive-header">
          <h1 className="archive-title">Skills & Expertise</h1>
          <p className="archive-subtitle">
            A holistic view of my capabilities, spanning advanced artificial intelligence research,
            full-stack development, and organizational leadership.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </div>

              <div className="skill-tags-container">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">
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