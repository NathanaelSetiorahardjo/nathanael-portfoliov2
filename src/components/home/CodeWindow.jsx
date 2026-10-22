// src/components/home/CodeWindow.jsx
// The home page's signature moment: an editor window types out who Nathanael is,
// then a terminal underneath "runs" the portfolio. Typing is text appearing, not movement,
// so it also plays with reduced motion.
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { heroCode } from '../../data/profile';
import { leadershipData } from '../../data/leadership';
import { projectData } from '../../data/projects';
import { countChars, objectToLines, sliceLines } from './codeTokens';

const MS_PER_CHAR = 9;
const START_DELAY = 350;

const terminal = [
  { kind: 'cmd', text: 'npm run portfolio' },
  { kind: 'ok', text: `${projectData.length} projects compiled` },
  { kind: 'ok', text: `${leadershipData.length} roles in leadership.log` },
  { kind: 'ready', text: 'Ready. Pick a file to open.' },
];

const prefix = { cmd: '$', ok: '✓', ready: '➜' };

function useTyped(total) {
  const [typed, setTyped] = useState(0);
  useEffect(() => {
    let frame = 0;
    let start = 0;
    const tick = (now) => {
      start ||= now;
      const n = Math.min(total, Math.max(0, Math.floor((now - start - START_DELAY) / MS_PER_CHAR)));
      setTyped(n);
      if (n < total) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [total]);
  return typed;
}

export default function CodeWindow() {
  const lines = useMemo(() => objectToLines('nathanael', heroCode), []);
  const total = useMemo(() => countChars(lines), [lines]);
  const typed = useTyped(total);
  const done = typed >= total;

  const { visible, caretLine } = sliceLines(lines, typed);

  return (
    <div className="code-window" aria-hidden="true">
      <div className="code-window-bar">
        <span className="traffic-lights">
          <span />
          <span />
          <span />
        </span>
        <span className="code-window-file">nathanael.ts</span>
      </div>
      <pre className="code-block">
        {visible.map((tokens, i) => (
          <span key={i} className="code-line">
            <span className="code-ln">{i + 1}</span>
            <span className="code-text">
              {tokens.map(([type, text], j) => (
                <span key={j} className={`tok-${type}`}>
                  {text}
                </span>
              ))}
              {i === caretLine && <span className="caret" />}
            </span>
          </span>
        ))}
      </pre>
      <div className="terminal">
        <p className="terminal-title">Terminal</p>
        <ul>
          {terminal.map((line, i) => (
            <motion.li
              key={line.text}
              className={`terminal-line terminal-${line.kind}`}
              initial={false}
              animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ delay: done ? 0.15 + i * 0.32 : 0, duration: 0.3, ease: 'easeOut' }}
            >
              <span className="terminal-prefix">{prefix[line.kind]}</span> {line.text}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
