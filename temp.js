let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, current) => {
  return total + current
});
console.log(sum); // 15