function isSubset(subset, set) {
    for (let elem of subset) {
        if (!set.has(elem)) return false;
    }
    return true;
}
console.log(isSubset(new Set([1, 2]), new Set([1, 2, 3])));