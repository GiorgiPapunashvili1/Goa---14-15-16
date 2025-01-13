function changeTextColorWithDelay(color, callback) {
    setTimeout(() => {
        callback(color);
    }, 2000);
}