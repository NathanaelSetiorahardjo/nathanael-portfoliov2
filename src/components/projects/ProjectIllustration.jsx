// src/components/projects/ProjectIllustration.jsx
// Pixel drawings for projects that have no real photo yet.
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

function TicketDrawing() {
  // A show ticket with a perforated stub, beside a spreadsheet grid feeding it.
  const grid = [];
  for (let r = 0; r < 5; r += 1) grid.push([4, 7 + r * 3, 12, 1]);
  const barcode = [];
  [0, 2, 3, 5, 7, 8, 10].forEach((x) => barcode.push([23 + x, 18, 1, 4]));
  const perf = [];
  for (let y = 9; y < 24; y += 2) perf.push([36, y]);
  return (
    <>
      {px(grid, 'bp-faint')}
      {px([[4, 7, 1, 13], [9, 7, 1, 13], [15, 7, 1, 13]], 'bp-faint')}
      {px([[5, 8, 4, 2]], 'bp-line-dim')}
      {px([[17, 13, 2, 1], [19, 12, 1, 3]], 'bp-line-dim')}
      {px([[21, 7, 22, 1], [21, 24, 22, 1], [21, 7, 1, 18], [42, 7, 1, 18]], 'bp-line')}
      {px(perf, 'bp-line-dim')}
      {px([[23, 10, 10, 2], [23, 13, 6, 1]], 'bp-accent')}
      {px(barcode, 'bp-line-dim')}
      {px([[38, 12, 2, 2], [38, 16, 2, 2]], 'bp-warn')}
    </>
  );
}

function ChatDrawing() {
  // Chat messages (text and a voice note) flow through the agent into an SAP record table.
  return (
    <>
      {px([[3, 6, 14, 5], [3, 11, 2, 1]], 'bp-line-dim')}
      {px([[6, 14, 13, 5], [17, 19, 2, 1]], 'bp-line-dim')}
      {px([[3, 22, 13, 5], [3, 27, 2, 1]], 'bp-faint')}
      {px([[5, 24, 1, 1], [7, 23, 1, 3], [9, 24, 1, 1], [11, 23, 1, 3], [13, 24, 1, 1]], 'bp-line')}
      {px([[5, 8, 9, 1], [8, 16, 8, 1]], 'bp-paper')}
      {px([[21, 15, 2, 1], [23, 14, 1, 3]], 'bp-line')}
      {px([[25, 12, 6, 6]], 'bp-accent')}
      {px([[32, 15, 2, 1], [34, 14, 1, 3]], 'bp-line')}
      {px([[36, 6, 9, 1], [36, 24, 9, 1], [36, 6, 1, 19], [44, 6, 1, 19]], 'bp-line')}
      {px([[38, 9, 5, 1], [38, 12, 5, 1], [38, 18, 5, 1], [38, 21, 5, 1]], 'bp-faint')}
      {px([[38, 15, 5, 1]], 'bp-warn')}
    </>
  );
}

const drawings = { vit: VitDrawing, lane: LaneDrawing, xray: XrayDrawing, ticket: TicketDrawing, chat: ChatDrawing };

export default function ProjectIllustration({ name, title }) {
  const Drawing = drawings[name];
  return (
    <svg
      className="bp-illustration"
      viewBox={`0 0 ${W} ${H}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={`Pixel illustration for ${title}`}
    >
      <rect width={W} height={H} className="bp-paper" />
      {Drawing && <Drawing />}
    </svg>
  );
}
