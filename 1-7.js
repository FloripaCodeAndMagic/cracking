// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.

const cleanUp = (i, j, matrix) => {
  matrix[i] = matrix[i].map(() => 0);
  matrix = matrix.map(r => {
    r[j] = 0;
    return r;
  });

  return matrix;
};

const oneDotSeven = matrix => {
  let blacklistedRows = {}
  let blacklistedCols = {}

  for (let i = 0; i < matrix.length; i++) {
    if (blacklistedRows[i]) {
      break;
    }

    const row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      if (blacklistedCols[j]) {
        break;
      }

      const el = row[j];

      if (el === 0) {
        blacklistedRows[i] = true;
        blacklistedCols[j] = true;
        matrix = cleanUp(i, j, matrix);
      }
    }
  }

  return matrix;
};

module.exports = oneDotSeven;
