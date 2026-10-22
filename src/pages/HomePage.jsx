// src/pages/HomePage.jsx
// nathanael.ts: hero, featured projects, about, recent roles and toolbox.
import { aboutCopy, profile } from '../data/profile';
import { leadershipCopy, leadershipData } from '../data/leadership';
import { projectData } from '../data/projects';
import { toolbox } from '../data/skills';
import { usePageTitle } from '../hooks/usePageTitle';
import Hero from '../components/home/Hero';
import RoleLog from '../components/leadership/RoleLog';
import ToolboxPit from '../components/home/ToolboxPit';
import ProjectCard from '../components/projects/ProjectCard';
import Reveal from '../components/ui/Reveal';
import SectionHeader from '../components/ui/SectionHeader';

const featured = projectData.filter((p) => p.featured);

export default function HomePage() {
  usePageTitle(null);

  return (
    <>
      <Hero />

      <section className="section" aria-labelledby="featured-title">
        <SectionHeader
          id="featured-title"
          title="Featured projects"
          intro="Selected work in AI and product engineering."
          link={{ to: '/projects', label: 'All projects' }}
        />
        <div className="card-grid">
          {featured.map((p, i) => (
            <Reveal key={p.id} index={i}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="about-title">
        <Reveal className="card about">
          <img className="about-photo" src={profile.photo} alt={profile.name} loading="lazy" decoding="async" />
          <div className="about-text">
            <h2 id="about-title" className="section-title">
              {aboutCopy.heading}
            </h2>
            {aboutCopy.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section" aria-labelledby="leadership-title">
        <SectionHeader
          id="leadership-title"
          title={leadershipCopy.heading}
          intro={leadershipCopy.intro}
          link={{ to: '/leadership', label: 'All roles' }}
        />
        <RoleLog items={leadershipData.slice(0, 2)} />
      </section>

      <section className="section" aria-labelledby="toolbox-title">
        <SectionHeader id="toolbox-title" title="Toolbox" intro="Languages and tools I use most." />
        <ToolboxPit tools={toolbox} />
      </section>
    </>
  );
}
