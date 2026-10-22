// src/components/leadership/BuildLog.jsx
// Leadership roles drawn as a build log: one entry per role on a vertical track.
import Icon from '../ui/Icon';

export default function BuildLog({ items }) {
  return (
    <ol className="build-log">
      {items.map((item) => (
        <li key={item.id} className="log-entry">
          <span className="log-marker" aria-hidden="true" />
          <article className="card log-card">
            <img className="log-photo" src={item.image} alt={`${item.org}`} loading="lazy" decoding="async" />
            <div className="log-body">
              <p className="meta">{item.date}</p>
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
        </li>
      ))}
    </ol>
  );
}
