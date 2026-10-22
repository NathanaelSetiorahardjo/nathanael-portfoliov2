// src/components/ui/Reveal.jsx
// Fades content up the first time it scrolls into view. `index` staggers items in a list.
import { motion } from 'motion/react';

export default function Reveal({ as = 'div', index = 0, className, children }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: Math.min(index, 6) * 0.07, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}
