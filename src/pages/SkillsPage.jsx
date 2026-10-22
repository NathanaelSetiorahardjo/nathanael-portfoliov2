// src/pages/SkillsPage.jsx
import { skillCategories, skillsCopy } from '../data/skills';
import { usePageTitle } from '../hooks/usePageTitle';
import Icon from '../components/ui/Icon';

export default function SkillsPage() {
  usePageTitle('Skills');
  return (
    <section className="section page-top container narrow">
      <h1 className="page-title">{skillsCopy.heading}</h1>
      <p className="section-intro">{skillsCopy.intro}</p>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <section key={cat.id} className="card skill-card" aria-labelledby={`skill-${cat.id}`}>
            <h2 id={`skill-${cat.id}`} className="card-title skill-title">
              <span className="skill-icon">
                <Icon name={cat.icon} size={20} />
              </span>
              {cat.title}
            </h2>
            <ul className="tags">
              {cat.skills.map((s) => (
                <li key={s} className="tag">
                  {s}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
