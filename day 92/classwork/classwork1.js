function unionSets(sets) {
    const result = new Set();

    sets.forEach(set => {
        set.forEach(item => result.add(item));
    });

    return result;
}