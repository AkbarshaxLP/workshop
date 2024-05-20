// 1.
array.includes(variable)

// 2.
let squared = 3 ** 2; // 9

// 3.
let obj = { a: 1, b: 2, c: 3 };
let values = Object.values(obj);   // [1, 2, 3]
let entries = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]

// const map = new Map(Object.entries({foo: 'bar'}));

// 4. Коллекция
const entries2 = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);
const obj2 = Object.fromEntries(entries2); // { foo: "bar", baz: 42 }

// 5. nullish coalescing 
const result2 = 0 ?? 42;                // 0
const result1 = 0 || 42;                // 42

const result3 = 0 || '' || 2 || 42;     // 2