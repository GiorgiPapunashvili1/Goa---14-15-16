function invertMap(map) {
    const inverted = new Map();
    for (let [key, value] of map) {
        inverted.set(value, key);
    }
    return inverted;
}
console.log(invertMap(new Map([['a', 1], ['b', 2], ['c', 1]])));