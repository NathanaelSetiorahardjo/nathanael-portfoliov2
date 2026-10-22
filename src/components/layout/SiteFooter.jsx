// src/components/layout/SiteFooter.jsx
import { profile } from '../../data/profile';
import Icon from '../ui/Icon';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <ul className="footer-socials">
        {profile.socials.map((s) => (
          <li key={s.id}>
            <a className="icon-button" href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}>
              <Icon name={s.id} size={20} />
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-copy">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
