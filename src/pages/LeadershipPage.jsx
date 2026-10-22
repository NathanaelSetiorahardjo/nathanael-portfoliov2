// src/pages/LeadershipPage.jsx
import { leadershipCopy, leadershipData } from '../data/leadership';
import { usePageTitle } from '../hooks/usePageTitle';
import BuildLog from '../components/leadership/BuildLog';

export default function LeadershipPage() {
  usePageTitle('Leadership');
  return (
    <section className="section page-top container narrow">
      <h1 className="page-title">{leadershipCopy.heading}</h1>
      <p className="section-intro">{leadershipCopy.intro}</p>
      <BuildLog items={leadershipData} />
    </section>
  );
}
