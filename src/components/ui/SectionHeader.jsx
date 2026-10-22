// src/components/ui/SectionHeader.jsx
// Section title with an optional intro line and a link to the full page on the right.
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function SectionHeader({ id, title, intro, link }) {
  return (
    <div className="section-header">
      <div>
        <h2 id={id} className="section-title">
          {title}
        </h2>
        {intro && <p className="section-intro">{intro}</p>}
      </div>
      {link && (
        <Link className="text-link" to={link.to} viewTransition>
          {link.label} <Icon name="arrow-right" size={16} />
        </Link>
      )}
    </div>
  );
}
