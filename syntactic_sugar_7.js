// 7. Class Syntax:

// ES5
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log('Hello, ' + this.name);
};

// ES6
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}


const alice = new Person('Alice', 25);
alice.sayHello();