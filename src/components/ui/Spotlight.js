// src/components/ui/Spotlight.js
// Pointer handlers for cards: a glow that follows the cursor and a slight 3D tilt
// (see .spotlight and .tilt in index.css). Mouse only, so phones skip the work.
export function trackSpotlight(event) {
  if (event.pointerType !== 'mouse') return;
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  el.style.setProperty('--mx', `${x}px`);
  el.style.setProperty('--my', `${y}px`);
  el.style.setProperty('--ry', `${((x / rect.width - 0.5) * 6).toFixed(2)}deg`);
  el.style.setProperty('--rx', `${((0.5 - y / rect.height) * 6).toFixed(2)}deg`);
}

export function resetSpotlight(event) {
  event.currentTarget.style.setProperty('--rx', '0deg');
  event.currentTarget.style.setProperty('--ry', '0deg');
}
