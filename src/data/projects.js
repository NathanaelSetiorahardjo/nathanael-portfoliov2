// src/data/projects.js
export const projectData = [
  {
      id: 'lane-guard',
      title: 'Lane-Guard',
      category: 'ai-research',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800', 
      tags: ['Computer Vision', 'OpenCV', 'Python'],
      role: 'Computer Vision Engineer', 
      stack: 'Python, OpenCV, Canny Edge Detection',
      challenge: 'Developing a highly responsive, real-time autonomous lane detection and tracking system capable of functioning under varying visual conditions.',
      solution: 'Engineered a pipeline utilizing Gaussian Blur and Canny Edge Detection to isolate line contours, followed by Hough Transform mathematics.'
  },
  {
      id: 'inductive-bias',
      title: 'Inductive Bias Warming',
      category: 'ai-research',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800', 
      tags: ['Deep Learning', 'PyTorch', 'Transformers'],
      role: 'Lead AI Researcher', 
      stack: 'PyTorch, Vision Transformers (ViT)',
      challenge: 'Addressing the data-hungry nature of Vision Transformers by improving how they learn spatial relationships during early training epochs.',
      solution: 'Conducting ongoing research on a temporal attention curriculum ("Inductive Bias Warming"). Implementing ablation studies to evaluate accuracy gains.'
  },
  {
      id: 'gestitalk',
      title: 'GestiTalk 2.0',
      category: 'engineering',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800', 
      tags: ['AI', 'TensorFlow', 'IoT'],
      role: 'Lead Developer', 
      stack: 'Python, TensorFlow, WebSockets',
      challenge: 'Translating continuous, full-word Indonesian Sign Language (BISINDO) into readable text and speech in real-time.',
      solution: 'Secured 3rd Place nationally at Samsung Solve for Tomorrow. Upgraded the AI pipeline to process sequential gesture data.'
  },
  {
      id: 'tubris',
      title: 'TUBRIS Early Screening',
      category: 'ai-research',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800', 
      tags: ['EfficientNet', 'Medical AI'],
      role: 'AI Developer', 
      stack: 'Python, EfficientNet, Web Integration',
      challenge: 'Building a reliable prototype for early screening of medical images to assist in rapid Tuberculosis classification.',
      solution: 'Trained an EfficientNet architecture on public X-ray datasets to classify anomalous patterns, serving the model via a user-friendly interface.'
  }
];