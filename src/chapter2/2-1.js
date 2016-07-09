// Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?

const removeElFromList = (el, cursor, list) => {
    while (cursor < list.length) {
        if (list.get(cursor) === el) {
            list.del(cursor);
        } else {
            cursor++
        }
    }

    return list;
};

const twoDotOne = list => {
    let cursor = 0;

    while (cursor < list.length) {
        list = removeElFromList(list.get(cursor), cursor + 1, list);
        cursor++;
    }

    return list;
};

const toString = list => {
    let cursor = 0;
    let a = [];

    while (cursor < list.length) {
        a.push(list.get(cursor));
        cursor++;
    }

    return a;
};

module.exports = {
    removeElFromList,
    twoDotOne
}
