// src/data/projects.js
// Every project on the site. `id` is also the URL: /projects/<id>.
// Projects without a real screenshot use `illustration` (a pixel drawing) instead of `image`.
// Optional fields, shown on the project page when present:
//   team: who it was built with · event: competition or show, and date · result: how it placed
//   status: where it stands now (shown on the project page only) · highlights: "How it works" bullet list
//   images: several pictures [{ src, alt }] instead of one `image`; cards and pages show a swipeable slider
import gestitalkThumbnail from '../assets/gestitalk-thumbnail.jpg';
import instockThumbnail from '../assets/instock-thumbnail.jpg';
import medcheckThumbnail from '../assets/medcheck-thumbnail.jpg';
import barberhubThumbnail from '../assets/barberhub-thumbnail.jpg';
import vitPhoto from '../assets/vit-icimtech.jpg';
import runaDashboard from '../assets/runa-dashboard.jpg';
import runaPresentation from '../assets/runa-presentation.jpg';
import runaQna from '../assets/runa-qna.jpg';
import katEticket from '../assets/kat-eticket.jpg';

export const projectData = [
  {
    id: 'runa',
    featured: true,
    category: 'ai-research',
    images: [
      { src: runaPresentation, alt: 'Our team presenting Runa to the judging panel in the finals' },
      { src: runaDashboard, alt: 'The Runa dashboard, Stats page' },
      { src: runaQna, alt: 'Presenting the Runa Notebook of learned SOP rules during the Q&A' },
    ],
    role: 'Developer & Presenter (roles shared evenly)',
    team: 'Jiovanny Lim, Aviel Aquino',
    event: 'SAP x AWS AI Agentic Hackathon, 31 Oct 2026',
    result: 'Finalist, top 40 teams',
    title: 'Runa',
    challenge:
      'A multi-agent AI system that turns logistics chat messages into SAP records as they happen. It reasons over company SOPs, driver working hours, accidents and weather, then gives supervisors clear options when a decision needs a person. Built for the SAP x AWS AI Agentic Hackathon, where our team reached the finals as one of the top 40 teams, in a field that included lecturers and master\'s students. The three of us shared the work evenly, building every part together and presenting to the judges as a team.',
    highlights: [
      'The Listener reads text, voice notes and photos from an operations chat and keeps only real business events, such as a delivery delay.',
      'The Resolver matches vague references like "PO yang kemarin" to SAP master data and scores its own confidence.',
      'When confidence is low, Runa asks a short clarifying question in Bahasa Indonesia or English instead of guessing.',
      'The Transactor posts the confirmed record to SAP with a reason code and a link to the source message, then checks it against related records for conflicts.',
      'In the demo, Runa catches a delivery delay, confirms it with the driver, posts the record, and warns the supervisor that the truck now arrives after the dock closes.',
    ],
    tags: ['Agentic AI', 'SAP Joule', 'Amazon Bedrock AgentCore', 'Amazon DynamoDB', 'SAP S/4HANA'],
    links: [
      { name: 'Dashboard', url: 'https://runa-dashboard-leiva230.cfapps.ap10.hana.ondemand.com/' },
      { name: 'Video', url: 'https://youtu.be/dN6lcfh9J5A' },
    ],
  },
  {
    id: 'kat-ticketing',
    featured: false,
    category: 'engineering',
    image: katEticket, // a real e-ticket; the buyer's name is pixelated and the code was voided
    role: 'Sole Developer',
    event: 'Konser Akhir Tahun XI, Grahaswara UNTAR, 20 Dec 2026',
    status: 'Live, 53 buyers so far (Nov 2026), about 400 expected', // update as sales grow
    title: 'KAT XI Ticketing System',
    challenge:
      'The ticketing system for Konser Akhir Tahun XI, the annual concert of Bersama Dalam Musik. I built and deployed it solo on Google Apps Script and Google Sheets: it takes orders, emails e-tickets with QR codes, and checks guests in at the door through a scanner web app.',
    highlights: [
      'Buyers order and pay through a Google Form. Each order lands in Google Sheets with a randomly generated booking code.',
      'The treasurer verifies the payment and marks the order VALID in the sheet.',
      'That sends the buyer an e-ticket by email with their zone, show time, package, booking code and a QR code.',
      'On the day, ushers scan the QR code with a separate scanner web app I also built, and swap it for a physical ticket. If a scan fails, they type the last 6 characters of the code.',
    ],
    tags: ['Google Apps Script', 'Google Sheets', 'Google Forms', 'QR Codes', 'Automation'],
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
