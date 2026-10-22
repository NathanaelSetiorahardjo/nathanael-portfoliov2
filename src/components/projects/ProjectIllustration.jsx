// src/components/projects/ProjectIllustration.jsx
// Pixel blueprint drawings for projects that have no real screenshot yet.
// Replace by adding `image` to the project in src/data/projects.js.
const W = 48;
const H = 30;

function px(cells, className) {
  return cells.map(([x, y, w = 1, h = 1], i) => (
    <rect key={`${className}-${i}`} x={x} y={y} width={w} height={h} className={className} />
  ));
}

function VitDrawing() {
  // Image split into patches; the attention window grows from one patch to many.
  const patches = [];
  for (let gx = 0; gx < 6; gx += 1) {
    for (let gy = 0; gy < 4; gy += 1) patches.push([10 + gx * 5, 5 + gy * 5, 4, 4]);
  }
  return (
    <>
      {px(patches, 'bp-faint')}
      {px([[20, 10, 4, 4]], 'bp-accent')}
      {px([[19, 9, 11, 1], [19, 19, 11, 1], [19, 9, 1, 11], [29, 9, 1, 11]], 'bp-line')}
      {px([[14, 4, 21, 1], [14, 25, 21, 1], [14, 4, 1, 22], [34, 4, 1, 22]], 'bp-line-dim')}
    </>
  );
}

function LaneDrawing() {
  const road = [];
  for (let y = 4; y < 28; y += 1) {
    const spread = Math.round((y - 4) * 0.75);
    road.push([22 - spread, y], [25 + spread, y]);
  }
  const dashes = [];
  for (let y = 6; y < 28; y += 5) dashes.push([23, y, 2, 2]);
  return (
    <>
      {px(road, 'bp-line')}
      {px(dashes, 'bp-faint')}
      {px([[21, 22, 6, 4], [20, 24, 1, 2], [27, 24, 1, 2]], 'bp-accent')}
      {px([[38, 6, 1, 1], [37, 7, 3, 1], [36, 8, 5, 1], [38, 7, 1, 1]], 'bp-warn')}
    </>
  );
}

function XrayDrawing() {
  const ribs = [];
  for (let i = 0; i < 6; i += 1) {
    const y = 7 + i * 3;
    const w = 9 - Math.abs(i - 2);
    ribs.push([23 - w - 1, y, w, 1], [25 + 1, y, w, 1]);
    ribs.push([23 - w - 2, y + 1, 1, 1], [25 + w + 1, y + 1, 1, 1]);
  }
  return (
    <>
      {px([[23, 4, 2, 23]], 'bp-line')}
      {px(ribs, 'bp-line-dim')}
      {px([[8, 15, 32, 1]], 'bp-accent')}
      {px([[29, 11, 3, 3]], 'bp-warn')}
    </>
  );
}

const drawings = { vit: VitDrawing, lane: LaneDrawing, xray: XrayDrawing };

export default function ProjectIllustration({ name, title }) {
  const Drawing = drawings[name];
  return (
    <svg
      className="bp-illustration"
      viewBox={`0 0 ${W} ${H}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={`Blueprint illustration for ${title}`}
    >
      <rect width={W} height={H} className="bp-paper" />
      {Drawing && <Drawing />}
    </svg>
  );
}
