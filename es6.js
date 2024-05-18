// ES6 (ECMAScript 2015)
// Некоторые из наиболее значимых изменений в ES6 включают:

// 1. Новый синтаксис для объявления переменных: let и const
// для объявления переменных с блочной областью видимости.
let x = 5;
const PI = 3.14159;


// 2. Стрелочные функции: Короткий синтаксис для объявления функций,
// который также изменяет область видимости this.
// Без параметров
let func = () => console.log('Hello, world!');

// С параметрами
let add = (a, b) => a + b;

// С блоком кода
let square = (x) => {
  return x * x;
};


// 3. Шаблонные строки: Улучшенный синтаксис для работы со строками,
// включая многострочные строки и встраивание выражений.
let name = 'Alice';
console.log(`Hello, ${name}!`);


// 4. Расширение объектных литералов: Возможность использовать
// вычисляемые имена свойств, укороченный синтаксис методов
// и другие улучшения.
let a = 5, b = 10;
let obj = { a, b };

let propName = 'age';
let person = {
  name: 'Bob',
  [propName]: 25
};


// 5. Деструктуризация: Удобный способ извлечения значений из
// массивов или объектов и присваивания их переменным.
let arr = [1, 2, 3];
let [first, second, third] = arr;

let obj = { a: 1, b: 2, c: 3 };
let { a, b, c } = obj;


// 6. Классы: Введение ключевого слова class для объявления
// классов в стиле ООП.
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Rex');
dog.speak(); // "Rex barks."


// 7. Модули: Стандартный способ организации кода и
// экспорта/импорта модулей.
// Модуль в файле math.js
export function sum(a, b) {
  return a + b;
}

// Импорт модуля
import { sum } from './math.js';


// 8. Promise: Стандартный способ работы с асинхронным кодом,
// представляющий результат выполнения операции, которая
// может быть выполнена сразу, позже или никогда.
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Async complete');
    }, 1000);
  });
}

asyncFunction().then((result) => {
  console.log(result); // "Async complete"
});


// 9. Итераторы и генераторы: Итераторы обеспечивают стандартный
// способ перебора элементов, а генераторы позволяют создавать
// итераторы с помощью нового ключевого слова function*.
let iterable = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) {
          return { value: i++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let value of iterable) {
  console.log(value); // 0, 1, 2
}


// 10. Map и Set: Новые коллекции для хранения уникальных значений.
let map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // "value"

let set = new Set([1, 2, 3, 4, 4, 5]);
console.log(set.size); // 5


// 11. Proxy и Reflect: Proxy позволяет создавать объекты-заместители для
// других объектов, позволяя перехватывать и изменять их поведение. Reflect
// предоставляет методы для выполнения стандартных операций над объектами,
// таких как чтение, запись и удаление свойств.
let target = {};
let handler = {
  get(target, prop, receiver) {
    console.log(`Getting ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Setting ${prop} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
};
let proxy = new Proxy(target, handler);

proxy.foo = 'bar'; // Setting foo to bar
console.log(proxy.foo); // Getting foo, "bar"


// 12. И многое другое, такие как: (find, includes, forEach)