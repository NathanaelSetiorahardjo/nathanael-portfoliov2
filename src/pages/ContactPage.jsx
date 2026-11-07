// src/pages/ContactPage.jsx
// contact.md: email first, then CV and socials.
import { contactCopy, profile } from '../data/profile';
import { usePageTitle } from '../hooks/usePageTitle';
import ContactCard from '../components/contact/ContactCard';
import Icon from '../components/ui/Icon';

export default function ContactPage() {
  usePageTitle('Contact');

  return (
    <section className="page-top narrow contact">
      <h1 className="page-title">
        <span className="md-mark" aria-hidden="true">
          #
        </span>
        {contactCopy.heading}
      </h1>
      <p className="lead">{contactCopy.body}</p>

      <ContactCard />

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
