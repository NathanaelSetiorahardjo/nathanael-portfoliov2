// src/pages/SkillsPage.jsx
// skills.json: each skill group drawn as a JSON key with its list of values.
import { skillCategories, skillsCopy } from '../data/skills';
import { usePageTitle } from '../hooks/usePageTitle';
import Reveal from '../components/ui/Reveal';

export default function SkillsPage() {
  usePageTitle('Skills');
  return (
    <section className="page-top narrow">
      <h1 className="page-title">{skillsCopy.heading}</h1>
      <p className="section-intro">{skillsCopy.intro}</p>
      <div className="json card">
        <span className="tok-punc" aria-hidden="true">
          {'{'}
        </span>
        {skillCategories.map((cat, i) => (
          <Reveal as="section" key={cat.id} index={i} className="json-entry">
            <h2 className="json-key">
              <span className="tok-str">"{cat.title}"</span>
              <span className="tok-punc" aria-hidden="true">
                : [
              </span>
            </h2>
            <ul className="json-values">
              {cat.skills.map((s, j) => (
                <li key={s} className="json-value">
                  <span className="tok-str">"{s}"</span>
                  {j < cat.skills.length - 1 && (
                    <span className="tok-punc" aria-hidden="true">
                      ,
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <span className="tok-punc json-close" aria-hidden="true">
              ]{i < skillCategories.length - 1 ? ',' : ''}
            </span>
          </Reveal>
        ))}
        <span className="tok-punc" aria-hidden="true">
          {'}'}
        </span>
      </div>
    </section>
  );
}
