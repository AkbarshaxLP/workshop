const obj = {
  name: 'Alice',
  age: 30,
  greeting() {
    // console.log(`Hello, ${this.name}`);
    (() => {
      console.log(this);
    })()
  }
}

obj.greeting()