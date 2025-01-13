function randomDelayReject() {
    return new Promise((_, reject) => {
      const delay = Math.floor(Math.random() * 3000) + 1000;
      setTimeout(() => reject("Task 3 failed"), delay);
    });
  }
  
  randomDelayReject()
    .catch((error) => {
      console.log(error); // Logs: Task 3 failed
    });