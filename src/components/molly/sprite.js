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
