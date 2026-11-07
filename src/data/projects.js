// src/data/projects.js
// Every project on the site. `id` is also the URL: /projects/<id>.
// Projects without a real screenshot use `illustration` (a pixel drawing) instead of `image`.
// Optional fields, shown on the project page when present:
//   team: who it was built with · result: how it placed · highlights: "How it works" bullet list
//   gallery: photos [{ src, alt, caption }] shown under "Photos" (two side by side on desktop)
import gestitalkThumbnail from '../assets/gestitalk-thumbnail.jpg';
import instockThumbnail from '../assets/instock-thumbnail.jpg';
import medcheckThumbnail from '../assets/medcheck-thumbnail.jpg';
import barberhubThumbnail from '../assets/barberhub-thumbnail.jpg';
import vitPhoto from '../assets/vit-icimtech.jpg';
// Runa photos: save them as src/assets/runa-1.jpg and runa-2.jpg (under ~300 KB), then uncomment:
// import runaPhoto1 from '../assets/runa-1.jpg';
// import runaPhoto2 from '../assets/runa-2.jpg';

export const projectData = [
  {
    id: 'runa',
    featured: false,
    category: 'ai-research',
    illustration: 'chat', // swap for `image: runaPhoto1` once the photos are in
    role: '',
    team: 'Jiovanny Lim, Aviel Aquino',
    result: 'Finalist, top 40 teams',
    title: 'Runa',
    challenge:
      'A multi-agent AI system that turns logistics chat messages into SAP records as they happen. It reasons over company SOPs, driver working hours, accidents and weather, then gives supervisors clear options when a decision needs a person. Our team reached the finals as one of the top 40 teams, in a field that included lecturers and master\'s students.',
    highlights: [
      'The Listener reads text, voice notes and photos from an operations chat and keeps only real business events, such as a delivery delay.',
      'The Resolver matches vague references like "PO yang kemarin" to SAP master data and scores its own confidence.',
      'When confidence is low, Runa asks a short clarifying question in Bahasa Indonesia or English instead of guessing.',
      'The Transactor posts the confirmed record to SAP with a reason code and a link to the source message, then checks it against related records for conflicts.',
      'Our MVP runs the full pipeline against a mock SAP system: it catches a delivery delay, confirms it with the driver, posts the record, and warns the supervisor that the truck now arrives after the dock closes.',
    ],
    tags: ['Agentic AI', 'Amazon Bedrock AgentCore', 'A2A', 'SAP S/4HANA'],
    gallery: [
      // { src: runaPhoto1, alt: 'Describe photo 1', caption: 'Short caption' },
      // { src: runaPhoto2, alt: 'Describe photo 2', caption: 'Short caption' },
    ],
    links: [],
  },
  {
    id: 'kat-ticketing',
    featured: false,
    category: 'engineering',
    illustration: 'ticket',
    role: 'Sole Developer',
    title: 'KAT XI Ticketing System',
    challenge:
      'An automated ticketing system for the KAT XI show, built with Google Apps Script and Google Sheets. Designed, built and deployed solo, and in live use for the show.',
    tags: ['Google Apps Script', 'Google Sheets', 'Automation'],
    links: [],
  },
  {
    id: 'gestitalk',
    featured: true,
    category: 'ai-research',
    image: gestitalkThumbnail,
    role: 'Team Leader & Lead Developer',
    title: 'GestiTalk 2.0',
    challenge:
      'An AI-powered web application that translates full-word Indonesian Sign Language (BISINDO) into text in real-time to bridge communication gaps for the deaf and hard-of-hearing community. Secured 3rd place nationally in Samsung Solve For Tomorrow 2025.',
    tags: ['AI/ML', 'Computer Vision', 'React', 'Real-time Translation'],
    links: [
      { name: 'GitHub', url: 'https://github.com/NathanaelSetiorahardjo/KYGB-SFT-GestiTalk' },
      { name: 'Deploy', url: 'https://gisti-talk-sft-2025.vercel.app/' },
      { name: 'Video', url: 'https://www.youtube.com/watch?v=5QhLJTIkV_s' },
      {
        name: 'News',
        url: 'https://inet.detik.com/cyberlife/d-8505431/mahasiswa-alumni-samsung-sft-bikin-ai-bahasa-isyarat-untuk-teman-tuli?page=2',
      },
    ],
  },
  {
    id: 'instock',
    featured: true,
    category: 'ai-research',
    image: instockThumbnail,
    role: 'UI/UX Lead',
    title: 'InStock',
    challenge:
      'A web platform that runs Indonesian financial news through a 5-model NLP ensemble (SVM, BiLSTM, DistilBERT, RoBERTa, and XLM-RoBERTa) to map economic impact.',
    tags: ['NLP', 'Transformers', 'FastAPI', 'React'],
    links: [
      { name: 'GitHub', url: 'https://github.com/NathanaelSetiorahardjo/KYGB-SFT-InStock' },
      { name: 'Deploy', url: 'https://instock-sft-2025.vercel.app/' },
    ],
  },
  {
    id: 'medcheck',
    featured: true,
    category: 'engineering',
    image: medcheckThumbnail,
    role: 'Team Leader',
    title: 'MedCheck - Helia',
    challenge:
      'An AI health companion built on the Gemini API that actively clarifies symptoms and translates complex medicine labels into plain-language summaries using OCR.',
    tags: ['Gemini API', 'Azure Cloud OCR', 'Prompt Engineering'],
    links: [
      { name: 'GitHub', url: 'https://github.com/NathanaelSetiorahardjo/KYGB-SFT-MedCheck' },
      { name: 'Deploy', url: 'https://medcheck-sft-2025.vercel.app/' },
    ],
  },
  {
    id: 'barberhub',
    featured: false,
    category: 'engineering',
    image: barberhubThumbnail,
    role: 'UI Developer & SDLC Coordinator',
    title: 'BarberHub',
    challenge:
      'A barber booking app with role-based access, real-time data sync, and double-booking prevention built with a strict Waterfall SDLC.',
    tags: ['System Architecture', 'UI/UX', 'Requirements Engineering'],
    links: [
      { name: 'GitHub', url: 'https://github.com/NathanaelSetiorahardjo/KYGB-SFT-BarberHub' },
      { name: 'Deploy', url: 'https://barberhub-sft-2025.vercel.app/' },
    ],
  },
  {
    id: 'inductive-bias',
    featured: false,
    category: 'ai-research',
    image: vitPhoto,
    role: 'Lead AI Researcher',
    title: 'Progressive Window Expansion (ViT)',
    challenge:
      'Addressing the data-hungry nature of Vision Transformers by improving how they learn spatial relationships during early training epochs through a progressive window attention curriculum.',
    tags: ['Deep Learning', 'PyTorch', 'Vision Transformers'],
    links: [],
  },
  {
    id: 'lane-guard',
    featured: false,
    category: 'ai-research',
    illustration: 'lane',
    role: 'Computer Vision Engineer',
    title: 'Lane-Guard',
    challenge:
      'An autonomous lane departure warning web application utilizing Gaussian Blur, Canny Edge Detection, and Hough Transform mathematics to track road lines in real time.',
    tags: ['Computer Vision', 'OpenCV', 'Python', 'Flask'],
    links: [],
  },
  {
    id: 'tubris',
    featured: false,
    category: 'ai-research',
    illustration: 'xray',
    role: 'AI Developer',
    title: 'TUBRIS Early Screening',
    challenge:
      'A deep learning chest X-ray classification prototype trained on an EfficientNet architecture to assist in rapid early screening of Tuberculosis.',
    tags: ['EfficientNet', 'Medical AI', 'Python'],
    links: [],
  },
];
export const projectCategories = [
  { id: 'all', label: 'All work' },
  { id: 'ai-research', label: 'AI & research' },
  { id: 'engineering', label: 'Engineering' },
];

export const projectsCopy = {
  heading: 'Projects',
  intro: 'Research, engineering, and design work. Open any file for the details.',
};
