// src/components/ui/SectionHeader.jsx
// Pixel section title with an optional intro line and a link on the right.
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function SectionHeader({ title, intro, link, as: Heading = 'h2' }) {
  return (
    <div className="section-header">
      <div>
        <Heading className="section-title">{title}</Heading>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {link && (
        <Link className="btn btn-secondary btn-small" to={link.to} viewTransition>
          {link.label} <Icon name="arrow-right" size={16} />
        </Link>
      )}
    </div>
  );
}
