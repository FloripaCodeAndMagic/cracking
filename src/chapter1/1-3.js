const assert = require('assert');

function isPermutation(s1, s2) {
    if (s1.length !== s2.length) return false;

    const s2Sorted = s2.split('').sort();
    const s1Sorted = s1.split('').sort();
    for (let i = 0; i < s1Sorted.length; i++) {
        if (s1Sorted[i] !== s2Sorted[i]) {
            return false;
        }
    }
    return true;
}

assert(isPermutation('abc', 'bca'));
assert(!isPermutation('abc', 'abd'));
assert(!isPermutation('abcc', 'abc'));
