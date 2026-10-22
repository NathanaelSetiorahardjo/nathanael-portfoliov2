// src/components/ui/PixelMascot.jsx
// A 16x16 pixel Nathanael in his suit. Each letter is one pixel; see `colors` for the key.
const sprite = [
  '................',
  '....hhhhhhhh....',
  '...hhhhhhhhhh...',
  '...hhhhhhhhhh...',
  '...hsshsssssh...',
  '...hssssssssh...',
  '...sssessesss...',
  '...dssssssssd...',
  '....sssmmsss....',
  '.....ssssss.....',
  '....kkwttwkk....',
  '...kkkwttwkkk...',
  '..kkkkwttwkkkk..',
  '..kkkkkttkkkkk..',
  '..skkkkkkkkkks..',
  '...kkkkkkkkkk...',
];

const colors = {
  h: '#1B1B24', // hair
  s: '#F2C29B', // skin
  d: '#D9A27A', // skin shade
  e: '#14213D', // eyes
  m: '#B5545C', // mouth
  w: '#FFFFFF', // shirt
  t: '#2F3E8C', // tie
  k: '#1F2433', // suit
};

function pixels(rows, skip = () => false) {
  const out = [];
  rows.forEach((row, y) => {
    [...row].forEach((c, x) => {
      if (c !== '.' && !skip(c)) out.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={colors[c]} />);
    });
  });
  return out;
}

const eyesOnly = sprite.map((row) => row.replace(/[^e]/g, '.'));

export default function PixelMascot({ size = 48, className = '' }) {
  return (
    <svg
      className={`mascot ${className}`}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel portrait of Nathanael"
    >
      <g className="mascot-body">
        {pixels(sprite, (c) => c === 'e')}
        <g className="mascot-eyes">{pixels(eyesOnly)}</g>
      </g>
    </svg>
  );
}
