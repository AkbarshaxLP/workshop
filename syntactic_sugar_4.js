// 4. Spread Operator:

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, b: 3}

const obj3 = {...obj1, ...obj2}

console.log(obj3)