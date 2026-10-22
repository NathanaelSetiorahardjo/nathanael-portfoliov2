// src/data/profile.js
// Personal details and site copy. Edit text here, not in components.
import profilePhoto from '../assets/profile-photo.jpg';

export const profile = {
  name: 'Nathanael Setiorahardjo',
  firstName: 'Nathanael',
  nickname: 'Yong',
  email: 'nathanael.setiorahardjo@gmail.com',
  cv: {
    href: '/Nathanael_Setiorahardjo_CV.pdf',
    filename: 'Nathanael_Setiorahardjo_CV.pdf',
  },
  photo: profilePhoto,
  socials: [
    { id: 'linkedin', name: 'LinkedIn', url: 'https://www.linkedin.com/in/nathanael-setiorahardjo/' },
    { id: 'github', name: 'GitHub', url: 'https://github.com/NathanaelSetiorahardjo' },
    { id: 'instagram', name: 'Instagram', url: 'https://instagram.com/nathanael_setiorahardjo' },
  ],
};

export const homeCopy = {
  greeting: "Hi, I'm Nathanael.",
  intro:
    'Computer Science student at BINUS University. I build AI tools and web apps, and I lead BDM, my campus music organization.',
  // Short "what's next" note under the intro. Set to null to hide it.
  next: 'Incoming Apple Developer Intern, accepted to this year’s cohort. The program starts in March 2027.',
};

// The object typed out in the home page code window. Only confirmed facts go here.
export const heroCode = {
  role: 'Computer Science student',
  campus: 'BINUS University',
  classOf: 2028,
  builds: ['AI tools', 'web apps'],
  leads: 'BDM, campus music organization',
  next: 'Apple Developer cohort, March 2027',
};

export const aboutCopy = {
  heading: 'A little about me',
  paragraphs: [
    'Most people call me Yong. I study Computer Science at BINUS University (Class of 2028), and my goal is simple: build technology that feels right and helps the people who need it.',
    'Whether I am writing code or leading my campus music organization, I care about the human impact of what I do.',
  ],
};

export const contactCopy = {
  heading: "Let's talk",
  body: 'Open to collaborating on AI research, building a product together, or simply connecting. My inbox is always open.',
};
