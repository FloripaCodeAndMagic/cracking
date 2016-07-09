const assert = require('assert');

function hasUniqueCharacters(s) {
  const sorted = s.split('').sort();
  let set = new Set();

  // if you know all the possibles characters, you can optimize with an if
  // if (sorted.length > chars.size) return false;

  for (c of sorted) {
    if (set.has(c)) {
      return false;
    }

    set.add(c);
  }

  return true;
}

assert.deepEqual(hasUniqueCharacters('abc'), true);
assert.deepEqual(hasUniqueCharacters('abcc'), false);
