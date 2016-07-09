// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabccccca a a would become a2blc5a3.
// If the "compressed" string would not become smaller than the original string, your method should return the original string.

const oneDotFive = input => {
    const x = [];
    let i = -1;

    for (c of input) {
        if (x.length === 0 || c !== x[i].c) {
            i++;
            x[i] = { c, count: 1 }
        } else {
            x[i].count++;
        }
    }

    return x.length * 2 > input.length ?
        input :
        x.reduce((s, whatever) => s += whatever.c + whatever.count, '');
};

module.exports = oneDotFive;
