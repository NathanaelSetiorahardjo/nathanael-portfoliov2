// src/components/contact/ContactCard.jsx
// The email card. Full on contact.md (copy, mail app, CV); `compact` on the home page
// swaps the mail app and CV buttons for small social links.
import { profile } from '../../data/profile';
import { useCopyEmail } from '../../hooks/useCopyEmail';
import Icon from '../ui/Icon';

export default function ContactCard({ compact = false }) {
  const copyEmail = useCopyEmail();

  return (
    <div className={`card contact-card${compact ? ' is-compact' : ''}`}>
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
        {compact ? (
          <ul className="contact-socials" aria-label="Elsewhere">
            {profile.socials.map((s) => (
              <li key={s.id}>
                <a className="btn btn-secondary btn-icon" href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
                  <Icon name={s.id} size={18} />
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <a className="btn btn-secondary" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={18} /> Open mail app
            </a>
            <a className="btn btn-secondary" href={profile.cv.href} download={profile.cv.filename}>
              <Icon name="download" size={18} /> Download CV
            </a>
          </>
        )}
      </div>
    </div>
  );
}
