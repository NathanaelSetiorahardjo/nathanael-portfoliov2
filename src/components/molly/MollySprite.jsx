// src/components/molly/MollySprite.jsx
// Draws Molly. `look` (-1, 0, 1) moves the pupils; `eyesClosed` shows sleepy lids.
import { body, colors, eyes, H, tailDown, tailUp, W } from './sprite';

const filled = new Set();
body.forEach((row, y) => [...row].forEach((c, x) => c !== '.' && filled.add(`${x},${y}`)));
eyes.forEach(([ex, ey]) => {
  for (let dx = 0; dx < 3; dx += 1) for (let dy = 0; dy < 2; dy += 1) filled.add(`${ex + dx},${ey + dy}`);
});
const solid = new Set([...filled, ...tailUp.map(([x, y]) => `${x},${y}`), ...tailDown.map(([x, y]) => `${x},${y}`)]);

// A one-pixel outline around the cat, shown in dark mode so the black fur stays visible.
const outline = [];
for (let y = -1; y <= H; y += 1) {
  for (let x = -1; x <= W; x += 1) {
    if (solid.has(`${x},${y}`)) continue;
    const touches = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => filled.has(`${x + dx},${y + dy}`));
    if (touches) outline.push([x, y]);
  }
}

const px = (x, y, fill, key, className) => (
  <rect key={key ?? `${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} className={className} />
);

const bodyPixels = [];
body.forEach((row, y) =>
  [...row].forEach((c, x) => {
    if (c !== '.') bodyPixels.push(px(x, y, colors[c]));
  }),
);

export default function MollySprite({ look = 0, eyesClosed = false, scale = 3 }) {
  return (
    <svg
      className="molly-sprite"
      width={(W + 2) * scale}
      height={(H + 2) * scale}
      viewBox={`-1 -1 ${W + 2} ${H + 2}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <g className="molly-outline">{outline.map(([x, y]) => px(x, y, 'currentColor', `o${x}-${y}`))}</g>
      <g className="molly-body">
        {bodyPixels}
        <g className="molly-tail molly-tail-up">{tailUp.map(([x, y]) => px(x, y, colors.k))}</g>
        <g className="molly-tail molly-tail-down">{tailDown.map(([x, y]) => px(x, y, colors.k))}</g>
        {eyes.map(([ex, ey]) =>
          eyesClosed ? (
            <g key={ex}>
              {[0, 1, 2].map((dx) => px(ex + dx, ey, colors.k, `t${ex}${dx}`))}
              {[0, 1, 2].map((dx) => px(ex + dx, ey + 1, colors.lid, `l${ex}${dx}`))}
            </g>
          ) : (
            <g key={ex} className="molly-eye">
              {[0, 1, 2].map((dx) => [0, 1].map((dy) => px(ex + dx, ey + dy, colors.eye, `e${ex}${dx}${dy}`)))}
              {[0, 1].map((dy) => px(ex + 1 + look, ey + dy, colors.k, `p${ex}${dy}`))}
            </g>
          ),
        )}
      </g>
    </svg>
  );
}
