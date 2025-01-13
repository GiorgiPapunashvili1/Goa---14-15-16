function greetUserWithDelay(callback) {
    const userName = prompt("გთხოვთ, შეიყვანეთ თქვენი სახელი:");

    setTimeout(() => {
        const message = `გამარჯობა, ${userName}! მადლობა, რომ დაეხმარე.`;
        callback(message);
    }, 3000);
}