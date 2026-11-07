// src/components/molly/sprite.js
// Molly as 8-bit pixel art: a black and white cat, 20 x 16 pixels.
// One letter per pixel. k = black fur, w = white fur, n = nose, . = empty.
// Eyes and tail are drawn separately so they can move.
export const W = 20;
export const H = 16;

export const body = [
  '.k........k.........',
  '.kk......kk.........',
  '.kkkkkkkkkk.........',
  '.kkkkkkkkkk.........',
  '.k...kk...k.........',
  '.k...kk...k.........',
  '.kkkkwwkkkk.........',
  '..kkwnnwkk..........',
  '...kwwwwk...........',
  '..kkwwwwkk..........',
  '.kkkwwwwkkk.........',
  '.kkkwwwwkkk.........',
  '.kkkkwwkkkk.........',
  '.kkkkkkkkkk.........',
  '.kkkkkkkkkk.........',
  '.kwwkkkkwwk.........',
];

// Eye boxes are 3 x 2, at columns 2-4 and 7-9 on rows 4-5.
export const eyes = [
  [2, 4],
  [7, 4],
];

// Two tail poses that swap to make the tail swish.
export const tailUp = [
  [11, 14], [12, 14], [13, 14], [14, 14], [15, 13], [16, 12], [16, 11], [16, 10], [15, 9],
];
export const tailDown = [
  [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 13], [17, 12], [17, 11], [18, 10],
];

export const colors = {
  k: '#15151c',
  w: '#f4f4f0',
  n: '#f2a0b4',
  eye: '#a6e36b',
  lid: '#6b7183',
  heart: '#ff6f91',
};

// Molly walking, seen from the side and facing right (flipped with CSS to walk left).
// Same 20 x 16 box as the sitting pose, so Molly stays on the same floor line.
// e = eye. Legs are drawn separately: two frames that swap to make the walk.
export const walkBody = [
  '....................',
  '....................',
  '....................',
  '...............k..k.',
  'k..............kkkkk',
  'k..............kkkkk',
  '.k.............kekkk',
  '.k.............kkkwn',
  '..kkkkkkkkkkkkkkkww.',
  '..kkkkkkkkkkkkkkwww.',
  '..kkkkkkkkkkkkkwww..',
  '..kkkkkkkkkkkkkkk...',
  '..kkkkkkkkkkkkkkk...',
  '....................',
  '....................',
  '....................',
];

// [x, y, colour letter] for each leg pixel: two rows of black fur, then a white paw.
// Frame A: legs straight down. Frame B: mid-stride, each pair spread apart.
const straight = (x) => [[x, 13, 'k'], [x, 14, 'k'], [x, 15, 'w']];
const angled = (x, out) => [[x, 13, 'k'], [out, 14, 'k'], [out, 15, 'w']];
export const walkLegsA = [...straight(3), ...straight(5), ...straight(12), ...straight(14)];
export const walkLegsB = [...angled(3, 2), ...angled(5, 6), ...angled(12, 11), ...angled(14, 15)];
