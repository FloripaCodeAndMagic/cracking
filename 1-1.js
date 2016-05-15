const assert = require('assert');

function hasUniqueCharacters(s) {
  let set = new Set();

  // if you know all the possibles characters, you can optimize with an if
  // if (s.length > chars.size) return false;

  for (c of s.sort()) {
    if (set.has(c)) {
      return false;
    }

    set.add(c);
  }

  return true;
}

assert.deepEqual(hasUniqueCharacters('abc'), true);
assert.deepEqual(hasUniqueCharacters('abcc'), false);
