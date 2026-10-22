// src/pages/HomePage.jsx
import { aboutCopy, profile } from '../data/profile';
import { leadershipCopy, leadershipData } from '../data/leadership';
import { projectData } from '../data/projects';
import { toolbox } from '../data/skills';
import { usePageTitle } from '../hooks/usePageTitle';
import Hero from '../components/home/Hero';
import BuildLog from '../components/leadership/BuildLog';
import ProjectCard from '../components/projects/ProjectCard';
import SectionHeader from '../components/ui/SectionHeader';

const featured = projectData.filter((p) => p.featured);

export default function HomePage() {
  usePageTitle(null);

  return (
    <>
      <Hero />

      <section className="section container" aria-labelledby="featured-title">
        <SectionHeader
          title={<span id="featured-title">Featured projects</span>}
          intro="Selected work in AI and product engineering."
          link={{ to: '/projects', label: 'All projects' }}
        />
        <div className="card-grid">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="section container" aria-labelledby="about-title">
        <div className="card about">
          <img className="about-photo" src={profile.photo} alt={profile.name} loading="lazy" decoding="async" />
          <div className="about-text">
            <h2 id="about-title" className="section-title">
              {aboutCopy.heading}
            </h2>
            {aboutCopy.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-labelledby="leadership-title">
        <SectionHeader
          title={<span id="leadership-title">{leadershipCopy.heading}</span>}
          intro={leadershipCopy.intro}
          link={{ to: '/leadership', label: 'All roles' }}
        />
        <BuildLog items={leadershipData.slice(0, 2)} />
      </section>

      <section className="section container" aria-labelledby="toolbox-title">
        <SectionHeader title={<span id="toolbox-title">Toolbox</span>} intro="Languages and tools I use most." />
        <ul className="toolbox">
          {toolbox.map((t) => (
            <li key={t} className="tool">
              {t}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
