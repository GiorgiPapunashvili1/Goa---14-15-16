let objects = [
    { name: "Apple", color: "Red", price: 1.2 },
    { name: "Banana", color: "Yellow", price: 0.5 },
    { name: "Cherry", color: "Red", price: 2.5 }
  ];
  
  for (let obj of objects) {
    for (let key in obj) {
      console.log(key + ": " + obj[key]);
    }
    console.log("");
  }
  
  for (let obj of objects) {
    console.log("Object: " + obj.name);
  }