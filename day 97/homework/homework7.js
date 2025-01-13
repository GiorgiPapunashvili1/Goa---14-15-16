function randomDelay() {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 2000) + 1000;
      setTimeout(() => resolve(), delay);
    });
  }
  
  randomDelay()
    .then(() => {
      console.log("First");
      return randomDelay();
    })
    .then(() => {
      console.log("Second");
    });