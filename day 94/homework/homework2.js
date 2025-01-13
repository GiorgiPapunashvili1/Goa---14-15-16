function delayedMessage(message, callback) {
    setTimeout(() => {
        console.log(message);
        callback();
    }, 2000);
}