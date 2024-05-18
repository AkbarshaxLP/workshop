// 6. Object Shorthand:

const first_name = 'Alice';
const age = 30;

const person = { first_name, age };



// Сокращение имён свойств (ES2015)
const a = "foo",
      b = 42,
      c = {};
const o = { a, b, c };

console.log(o)