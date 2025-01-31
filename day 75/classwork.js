// class Rectangle {
//   constructor(widht, height) {
//     this.width = widht;
//     this.height = height;
//   }

//   getPerimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const rect = new Rectangle(5, 10);
// console.log("Perimeter:", rect.getPerimeter());





// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   speak() {
//     console.log(`${this.name} makes a sound.`);
//   }
// }

// class Mammal extends Animal {
//   constructor(name, age, furColor) {
//     super(name, age);
//     this.furColor = furColor;
//   }

//   speak() {
//     console.log(`${this.name} makes a mammal sound.`);
//   }
// }

// class Dog extends Mammal {
//   constructor(name, age, furColor, breed) {
//     super(name, age, furColor);
//     this.breed = breed;
//   }

//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const myDog = new Dog("Buddy", 3, "Brown", "Golden Retriever");
// myDog.speak();
