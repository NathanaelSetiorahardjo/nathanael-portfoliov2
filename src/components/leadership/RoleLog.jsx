// src/components/leadership/RoleLog.jsx
// Leadership roles as a git-style log: one entry per role on a branch line, newest first.
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';

export default function RoleLog({ items }) {
  return (
    <ol className="role-log">
      {items.map((item, i) => (
        <Reveal as="li" key={item.id} index={i} className="log-entry">
          <span className={`log-node${item.date.includes('Present') ? ' is-head' : ''}`} aria-hidden="true" />
          <article className="card log-card">
            <img className="log-photo" src={item.image} alt={item.org} loading="lazy" decoding="async" />
            <div className="log-body">
              <p className="log-date">
                {item.date}
                {item.date.includes('Present') && <span className="log-head">current</span>}
              </p>
              <h3 className="card-title">{item.title}</h3>
              <p className="log-org">
                {item.org}
                {item.link && (
                  <a className="inline-link" href={item.link.url} target="_blank" rel="noreferrer">
                    <Icon name="instagram" size={16} /> {item.link.name}
                  </a>
                )}
              </p>
              <ul className="log-bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </ol>
  );
}
