function symmetricDifference(set1, set2) {
    const result = new Set([...set1].filter(x => !set2.has(x)).concat([...set2].filter(x => !set1.has(x))));
    return result;
}
console.log(symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5])));