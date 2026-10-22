// src/components/ui/Spotlight.js
// Pointer handler that lets a card's glow follow the cursor (see .spotlight in index.css).
export function trackSpotlight(event) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  el.style.setProperty('--my', `${event.clientY - rect.top}px`);
}
