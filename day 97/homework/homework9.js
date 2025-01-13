function randomTaskDelay() {
    return new Promise((resolve) => {
      const delay = Math.floor(Math.random() * 4000) + 1000;
      const randomNumber = Math.random();
  
      setTimeout(() => {
        if (randomNumber > 0.5) {
          resolve("Task 1 complete");
        } else {
          resolve("Task 1 was quick");
        }
      }, delay);
    });
  }
  
  randomTaskDelay().then((message) => {
    console.log(message);
  });
  