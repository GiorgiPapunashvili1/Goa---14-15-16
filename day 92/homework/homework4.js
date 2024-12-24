function characterFrequency(string) {
    const map = new Map();
    for (let char of string) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
}
console.log(characterFrequency("hello"));