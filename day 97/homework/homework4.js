function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("First");
        }, 2000);
    });
}

firstTask()
    .then(message => {
        console.log(message);
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Second");
            }, 1000);
        });
    })
    .then(secondMessage => {
        console.log(secondMessage);
    });