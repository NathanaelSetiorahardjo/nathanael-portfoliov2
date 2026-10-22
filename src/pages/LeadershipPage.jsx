// src/pages/LeadershipPage.jsx
// leadership.log
import { leadershipCopy, leadershipData } from '../data/leadership';
import { usePageTitle } from '../hooks/usePageTitle';
import RoleLog from '../components/leadership/RoleLog';

export default function LeadershipPage() {
  usePageTitle('Leadership');
  return (
    <section className="page-top narrow">
      <h1 className="page-title">{leadershipCopy.heading}</h1>
      <p className="section-intro">{leadershipCopy.intro}</p>
      <RoleLog items={leadershipData} />
    </section>
  );
}
