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
let a1 = 5, b1 = 10;
let obj1 = { a1, b1 };

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

// 9. Map и Set: Новые коллекции для хранения уникальных значений.
let map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // "value"

let set = new Set([1, 2, 3, 4, 4, 5]);
console.log(set.size); // 5

// 10. И многое другое, такие как: (find, includes, forEach)