/* Замыкание (closure) в JavaScript — это функция, которая запоминает своё лексическое окружение,
   даже когда она выполняется вне своей области видимости. Проще говоря, замыкание позволяет функции
   «запомнить» переменные, которые были доступны в её контексте на момент создания.
*/

/* Замыкание в JavaScript — это функция, которая "помнит" переменные из той области видимости,
   в которой она была создана, даже если эта функция выполняется вне этой области.
*/


// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();


function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3