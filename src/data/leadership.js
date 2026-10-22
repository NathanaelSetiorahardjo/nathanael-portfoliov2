// src/data/leadership.js
// Roles shown on the leadership "build log", in display order.
import bdmPhoto from '../assets/bdm-group-photo.JPG';
import gsaPhoto from '../assets/gsa-thumbnail.jpg';
import codebarPhoto from '../assets/codebar-thumbnail.jpg';
import fypPhoto from '../assets/fyp-thumbnail.jpg';
import bnecPhoto from '../assets/bnec-thumbnail.jpg';

export const leadershipCopy = {
  heading: 'Leadership & community',
  intro: "Teams I've led and people I've taught across campus.",
};

export const leadershipData = [
  {
    id: 'bdm',
    title: 'Chairman',
    org: 'Bersama Dalam Musik (BDM)',
    date: 'Nov 2025 – Present',
    image: bdmPhoto,
    link: { name: '@ukm_bdm', url: 'https://www.instagram.com/ukm_bdm/' },
    bullets: [
      'Led a cross-functional student music organization of 30 members across 5 divisions.',
      "Overhauled BDM's operational foundation, introducing the first SOP and archive system.",
      "Restored the organization's standing with the university, repaired cross-organizational relationships, and grew active player turnout to a record 35.",
      'Restructured administrative responsibilities with the executive team (Nobertus & Rafael Shira) to commit to a modern orchestra identity.',
    ],
  },
  {
    id: 'gsa',
    title: 'Google Student Ambassador',
    org: 'GSA 2026 Program',
    date: 'Apr 2026 – Present',
    image: gsaPhoto,
    bullets: [
      'Representing BINUS University in the GSA 2026 cycle.',
      'Creating and managing tech-focused content as part of the ambassador program.',
    ],
  },
  {
    id: 'codebar',
    title: 'Calculus Tutor',
    org: 'Code Bar Boot Camp',
    date: 'Feb 2026 – Jun 2026',
    image: codebarPhoto,
    bullets: [
      'Served as a Junior Tutor, teaching Calculus via Zoom to a class of 25 students.',
      'Summarized and curated learning materials across 6 sessions.',
      'Mentored students and guided preparation for the Midterm and Final Calculus exams.',
    ],
  },
  {
    id: 'fyp',
    title: 'Freshmen Leader & Partner',
    org: 'First Year Program (FYP)',
    date: 'Sep 2024 – Jun 2026',
    image: fypPhoto,
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
    image: bnecPhoto,
    bullets: [
      'Conducted TOEFL preparation sessions for classes of 7–8 students.',
      'Improved student English proficiency and test readiness through a structured curriculum.',
    ],
  },
];
