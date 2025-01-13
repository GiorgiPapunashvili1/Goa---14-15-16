function randomTaskWithFailuer() {
    return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * 3000) + 1000;
      const randomNumber = Math.random();
  
      setTimeout(() => {
        if (randomNumber < 0.3) {
          reject("Task 3 failed");
        } else {
          resolve("Task 3 complete");
        }
      }, delay);
    });
  }
  
  randomTaskWithFailuer()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  