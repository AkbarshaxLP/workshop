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