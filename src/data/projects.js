// src/data/projects.js
import gestitalkThumbnail from '../assets/gestitalk-thumbnail.jpg';
import instockThumbnail from '../assets/instock-thumbnail.jpg';
import medcheckThumbnail from '../assets/medcheck-thumbnail.jpg';
import barberhubThumbnail from '../assets/barberhub-thumbnail.jpg';

export const projectData = [
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
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
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
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    role: 'AI Developer',
    title: 'TUBRIS Early Screening',
    challenge:
      'A deep learning chest X-ray classification prototype trained on an EfficientNet architecture to assist in rapid early screening of Tuberculosis.',
    tags: ['EfficientNet', 'Medical AI', 'Python'],
    links: [],
  },
];