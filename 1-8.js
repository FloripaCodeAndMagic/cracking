// Assume you have a method isSubstring which checks if one word is asubstring of another.
// Given two strings, si and s2, write code to check Ifs2 isa rotation of si using only
// onecalltoisSubstring (e.g., "waterbottLe" is a rotation of "erbot- tLewat").

const oneDotEight = (s1, s2) => {
    let group = '';
    for (let i = s2.length - 1; i >= 0; i--) {
        group = s2[i] + group;
        if (s1.startsWith(group)) {
            const result = group + s2.slice(0, s2.length - group.length);
            return result === s1;
        }
    }

    return false;
};

module.exports = oneDotEight;
