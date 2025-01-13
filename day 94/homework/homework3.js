function processArrayWithDelay(array, callback) {
    let count = 0;
    let resultArray = [];

    array.forEach((number, index) => {
        setTimeout(() => {
            const squared = number * number;
            resultArray[index] = squared;

            count++;
            if (count === array.length) {
                callback(resultArray);
            }
        }, 1000 * (index + 1));
    });
}
