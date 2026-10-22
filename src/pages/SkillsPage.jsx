// src/pages/SkillsPage.jsx
// skills.json as a split editor: the JSON source on the left, a rendered preview on the right.
// Hovering a skill on either side highlights it on the other; keys fold like in VS Code.
// On phones the two sides become tabs.
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { skillCategories, skillsCopy } from '../data/skills';
import { usePageTitle } from '../hooks/usePageTitle';
import Icon from '../components/ui/Icon';
import Reveal from '../components/ui/Reveal';

const ease = [0.2, 0.8, 0.2, 1];

// Line numbers for each key, given which keys are folded. Line 1 is the opening brace.
function lineNumbers(folded) {
  let n = 2;
  const starts = skillCategories.map((cat) => {
    const start = n;
    n += folded.includes(cat.id) ? 1 : cat.skills.length + 2;
    return start;
  });
  return { starts, end: n };
}

function Line({ n, active, children, ...handlers }) {
  return (
    <div className={`json-line${active ? ' is-active' : ''}`} {...handlers}>
      <span className="json-ln">{n}</span>
      <span className="json-code">{children}</span>
    </div>
  );
}

function JsonSource({ folded, toggle, hovered, setHovered }) {
  const { starts, end } = lineNumbers(folded);

  return (
    <div className="json-source">
      <Line n={1}>
        <span className="br-1">{'{'}</span>
      </Line>
      {skillCategories.map((cat, ci) => {
        const isFolded = folded.includes(cat.id);
        const last = ci === skillCategories.length - 1;
        const start = starts[ci];
        return (
          <div key={cat.id} className="json-block">
            <Line n={start}>
              <button
                type="button"
                className="fold"
                aria-expanded={!isFolded}
                aria-label={`${isFolded ? 'Unfold' : 'Fold'} ${cat.title}`}
                onClick={() => toggle(cat.id)}
              >
                <motion.span animate={{ rotate: isFolded ? -90 : 0 }} transition={{ duration: 0.2 }}>
                  ▾
                </motion.span>
              </button>
              {'  '}
              <span className="tok-prop">"{cat.title}"</span>
              <span className="tok-punc">: </span>
              <span className="br-2">[</span>
              {isFolded && (
                <>
                  <span className="json-ellipsis">…</span>
                  <span className="br-2">]</span>
                  <span className="tok-punc">{last ? '' : ','}</span>
                  <span className="json-ghost"> {cat.skills.length} items</span>
                </>
              )}
            </Line>
            <AnimatePresence initial={false}>
              {!isFolded && (
                <motion.div
                  className="json-fold-body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease }}
                >
                  {cat.skills.map((s, si) => (
                    <Line
                      key={s}
                      n={start + 1 + si}
                      active={hovered === s}
                      onPointerEnter={() => setHovered(s)}
                      onPointerLeave={() => setHovered(null)}
                    >
                      {'    '}
                      <span className="tok-str">"{s}"</span>
                      <span className="tok-punc">{si < cat.skills.length - 1 ? ',' : ''}</span>
                    </Line>
                  ))}
                  <Line n={start + cat.skills.length + 1}>
                    {'  '}
                    <span className="br-2">]</span>
                    <span className="tok-punc">{last ? '' : ','}</span>
                  </Line>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
      <Line n={end}>
        <span className="br-1">{'}'}</span>
      </Line>
    </div>
  );
}

function Preview({ folded, hovered, setHovered }) {
  return (
    <div className="skills-preview">
      {skillCategories.map((cat, i) => (
        <Reveal
          as="section"
          key={cat.id}
          index={i}
          className={`skill-group${folded.includes(cat.id) ? ' is-folded' : ''}`}
        >
          <h2 className="skill-group-title">
            <span className="skill-icon">
              <Icon name={cat.icon} size={18} />
            </span>
            {cat.title}
            <span className="skill-count">{cat.skills.length}</span>
          </h2>
          <ul className="skill-chips">
            {cat.skills.map((s) => (
              <li
                key={s}
                className={`skill-chip${hovered === s ? ' is-active' : ''}`}
                onPointerEnter={() => setHovered(s)}
                onPointerLeave={() => setHovered(null)}
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}

export default function SkillsPage() {
  usePageTitle('Skills');
  const [folded, setFolded] = useState([]);
  const [hovered, setHovered] = useState(null);
  const [view, setView] = useState('preview'); // phones only
  const toggle = (id) => setFolded((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  return (
    <section className="page-top">
      <h1 className="page-title">{skillsCopy.heading}</h1>
      <p className="section-intro">{skillsCopy.intro}</p>

      <div className="split-switch" role="group" aria-label="View">
        {['preview', 'code'].map((v) => (
          <button key={v} type="button" className="filter-button" aria-pressed={view === v} onClick={() => setView(v)}>
            {view === v && <motion.span layoutId="split-active" className="filter-active" />}
            <span className="filter-label">{v === 'preview' ? 'Preview' : 'skills.json'}</span>
          </button>
        ))}
      </div>

      <div className={`split show-${view}`}>
        <div className="split-pane split-code card" aria-label="skills.json source">
          <p className="panel-bar">
            <span className="file-badge file-badge-json">{'{}'}</span> skills.json
          </p>
          <JsonSource folded={folded} toggle={toggle} hovered={hovered} setHovered={setHovered} />
        </div>
        <div className="split-pane split-preview card">
          <p className="panel-bar">
            <Icon name="eye" size={14} /> Preview skills.json
          </p>
          <Preview folded={folded} hovered={hovered} setHovered={setHovered} />
        </div>
      </div>
    </section>
  );
}
