const numberPromise = new Promise((resolve) => {
    resolve(5);
});

numberPromise
    .then(number => {
        const doubled = number * 2;
        return doubled;
    })
    .then(doubledNumber => {
        console.log(doubledNumber);
    });