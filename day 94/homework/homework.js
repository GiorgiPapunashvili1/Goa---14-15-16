function greet(name, callback) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      callback(); 
    }, 2000);
  }

  function afterGreeting() {
    console.log('Callback function executed after greeting.');
  }
  
  greet('John', afterGreeting);