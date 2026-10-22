// src/components/home/Hero.jsx
import { Link } from 'react-router-dom';
import { homeCopy, profile } from '../../data/profile';
import Icon from '../ui/Icon';
import WorkbenchDiagram from './WorkbenchDiagram';

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1 className="display">{homeCopy.greeting}</h1>
        <p className="lead">{homeCopy.intro}</p>
        {homeCopy.next && (
          <p className="next-note">
            <span className="next-dot" aria-hidden="true" />
            {homeCopy.next}
          </p>
        )}
        <div className="actions">
          <a className="btn btn-primary" href={profile.cv.href} download={profile.cv.filename}>
            <Icon name="download" size={18} /> Download CV
          </a>
          <Link className="btn btn-secondary" to="/contact" viewTransition>
            Get in touch <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>
      <WorkbenchDiagram />
    </section>
  );
}
