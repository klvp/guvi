/** @format */

let num = [1, 2, 3, 3, 2, 1, 5, 8, 9];

let isUnique = function (value, index, self) {
  return self.indexOf(value) === index;
};

let unique = num.filter(isUnique);
console.log("\n removing duplicates using ananymous function\n");
console.log(unique);

let unique_numbers = (function (n) {
  return new Array(...new Set(n));
})(num);
console.log("\n removing duplicates using IIFE function\n");
console.log(unique_numbers.sort((num1, num2) => num1 - num2));
