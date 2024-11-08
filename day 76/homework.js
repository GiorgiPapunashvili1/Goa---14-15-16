function findCommonElements(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    const commonElements = [...set1].filter(item => set2.has(item));
    return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(findCommonElements(array1, array2))