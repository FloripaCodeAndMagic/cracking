const assert = require('assert');

function rotate90(img, n) {
  const dimension = img.length / n;

  for (let i = 0; i < dimension; i++) {
    let pedaco = img.slice([i * n], (i * n) + n)
  }

  function replacePositions() {
  }
}

const img = [
  [1,  2,  3,  4,  5,  6,  7,  8],
  [9, 10, 11, 12, 13, 14, 15, 16]
];

const rotated = [
  [9,  10, 11, 12, 1, 2, 3, 4],
  [13, 14, 15, 16, 5, 6, 7, 8]
];

assert.deepEqual(rotate90(img, 4), rotated);
