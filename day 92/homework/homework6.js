function findMaxKeys(map) {
    let max = -Infinity;
    const keys = [];
    for (let [key, value] of map) {
        if (value > max) {
            max = value;
            keys.length = 0;
            keys.push(key);
        } else if (value === max) {
            keys.push(key);
        }
    }
    return keys;
}
console.log(findMaxKeys(new Map([['a', 5], ['b', 3], ['c', 5]])));