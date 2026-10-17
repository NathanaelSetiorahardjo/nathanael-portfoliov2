// src/components/Leadership.jsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import chairmanThumbnail from '../assets/bdm-group-photo.JPG';
import gsaThumbnail from '../assets/gsa-thumbnail.jpg';
import cbThumbnail from '../assets/codebar-thumbnail.jpg';
import fypThumbnail from '../assets/fyp-thumbnail.jpg';
import bnecThumbnail from '../assets/bnec-thumbnail.jpg';

const leadershipData = [
  {
    id: 'bdm',
    title: 'Chairman',
    org: 'Bersama Dalam Musik (BDM)',
    date: 'Nov 2025 – Present',
    image: chairmanThumbnail,
    link: {
      name: '@ukm_bdm',
      url: 'https://www.instagram.com/ukm_bdm/',
      icon: 'fab fa-instagram',
    },
    bullets: [
      'Led a cross-functional student music organization of 30 members across 5 divisions.',
      "Overhauled BDM's operational foundation, introducing the first SOP and archive system.",
      'Restored university standing, repaired cross-organizational relationships, and grew active player turnout to a record-high of 35.',
      'Restructured administrative responsibilities with the executive team (Nobertus & Rafael Shira) to commit to a modern orchestra identity.',
    ],
  },
  {
    id: 'gsa',
    title: 'Google Student Ambassador',
    org: 'GSA 2026 Program',
    date: 'April 2026 – Present',
    image: gsaThumbnail,
    bullets: [
      'Representing BINUS University in the highly competitive GSA 2026 cycle.',
      'Creating and managing tech-focused content as part of the ambassador program.',
    ],
  },
  {
    id: 'codebar',
    title: 'Calculus Tutor',
    org: 'Code Bar Boot Camp',
    date: 'Feb 2026 – June 2026',
    image: cbThumbnail,
    bullets: [
      'Served as a Junior Tutor, teaching Calculus via Zoom to a class of 25 students.',
      'Summarized and curated comprehensive learning materials across 6 sessions.',
      'Mentored students and guided exam preparation for Midterm and Final Calculus exams.',
    ],
  },
  {
    id: 'fyp',
    title: 'Freshmen Leader & Partner',
    org: 'First Year Program (FYP)',
    date: 'Sep 2024 – June 2026',
    image: fypThumbnail,
    bullets: [
      'Mentored and supported 10 freshmen throughout the program to help them adapt academically and socially.',
      'Facilitated learning sessions and delivered materials to over 60 freshmen during an 8-day orientation.',
    ],
  },
  {
    id: 'bnec',
    title: 'English Tutor',
    org: 'Bina Nusantara English Community',
    date: 'Oct 2025 – Jan 2026',
    image: bnecThumbnail,
    bullets: [
      'Conducted TOEFL preparation sessions for classes of 7-8 students.',
      'Enhanced student English proficiency and test readiness through a structured curriculum.',
    ],
  },
];

export default function Leadership({ isPreview = false }) {
  useEffect(() => {
    if (!isPreview) {
      window.scrollTo(0, 0);
    }
  }, [isPreview]);

  const displayedItems = isPreview ? leadershipData.slice(0, 2) : leadershipData;

  return (
    <section className={`section ${isPreview ? '' : 'page-top-offset'}`} id="leadership">
      <div className="container" style={{ maxWidth: '1000px' }}>
        {isPreview ? (
          <div className="section-header-row">
            <div>
              <h2 className="section-heading-left">Leadership & Community</h2>
              <p className="section-subtitle-left">
                Building teams, shaping culture, and driving operational excellence across campus.
              </p>
            </div>
            <Link to="/leadership" className="btn btn-secondary">
              View All Roles <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        ) : (
          <div className="archive-header">
            <h1 className="archive-title">Leadership & Community</h1>
            <p className="archive-subtitle">
              Building teams, shaping culture, and driving operational excellence across campus organizations.
            </p>
          </div>
        )}

        <div className="leadership-list">
          {displayedItems.map((item) => (
            <div key={item.id} className="leadership-card">
              <div className="leadership-cover">
                <img
                  src={item.image}
                  alt={item.org}
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                <div className="leadership-cover-gradient"></div>
              </div>

              <div className="leadership-body">
                <div className="leadership-meta">
                  <div>
                    <h3 className="leadership-role-title">{item.title}</h3>
                    <div className="leadership-org-row">
                      <span className="leadership-org">{item.org}</span>
                      {item.link && (
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="leadership-social-pill"
                        >
                          <i className={item.link.icon}></i> {item.link.name}
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="leadership-date-pill">{item.date}</span>
                </div>

                <ul className="leadership-bullets">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}