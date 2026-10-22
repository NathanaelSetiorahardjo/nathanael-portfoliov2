// src/pages/ContactPage.jsx
// contact.md: email first, then CV and socials.
import { contactCopy, profile } from '../data/profile';
import { useCopyEmail } from '../hooks/useCopyEmail';
import { usePageTitle } from '../hooks/usePageTitle';
import Icon from '../components/ui/Icon';

export default function ContactPage() {
  usePageTitle('Contact');
  const copyEmail = useCopyEmail();

  return (
    <section className="page-top narrow contact">
      <h1 className="page-title">
        <span className="md-mark" aria-hidden="true">
          #
        </span>
        {contactCopy.heading}
      </h1>
      <p className="lead">{contactCopy.body}</p>

      <div className="card contact-card">
        <p className="terminal-line terminal-cmd">
          <span className="terminal-prefix" aria-hidden="true">
            $
          </span>{' '}
          mail <span className="contact-email">{profile.email}</span>
        </p>
        <div className="actions">
          <button type="button" className="btn btn-primary" onClick={copyEmail}>
            <Icon name="copy" size={18} /> Copy email
          </button>
          <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={18} /> Open mail app
          </a>
          <a className="btn btn-secondary" href={profile.cv.href} download={profile.cv.filename}>
            <Icon name="download" size={18} /> Download CV
          </a>
        </div>
      </div>

      <h2 className="detail-subtitle">
        <span className="md-mark" aria-hidden="true">
          ##
        </span>
        Elsewhere
      </h2>
      <ul className="social-list">
        {profile.socials.map((s) => (
          <li key={s.id}>
            <a className="btn btn-secondary" href={s.url} target="_blank" rel="noreferrer">
              <Icon name={s.id} size={18} /> {s.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
