function unionOfSets(sets) {
    return sets.reduce((acc, set) => {
        set.forEach(value => acc.add(value));
        return acc;
    }, new Set());
}
console.log(unionOfSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));