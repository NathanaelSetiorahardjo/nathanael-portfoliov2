// src/components/layout/LineGutter.jsx
// Decorative line numbers down the left of the editor (desktop only).
// Counts how many 28 px "lines" tall the page is and numbers them.
import { useEffect, useRef, useState } from 'react';

const LINE = 28; // keep in step with --code-line in index.css

export default function LineGutter() {
  const ref = useRef(null);
  const [count, setCount] = useState(40);

  useEffect(() => {
    const target = ref.current?.parentElement;
    if (!target || typeof ResizeObserver === 'undefined') return undefined;
    const observer = new ResizeObserver(([entry]) => {
      setCount(Math.max(1, Math.floor(entry.contentRect.height / LINE)));
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="gutter" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => i + 1).join('\n')}
    </div>
  );
}
