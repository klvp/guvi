/** @format */

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = function (num) {
  return num.reduce((num1, num2) => num1 + num2);
};
console.log("\nSum of array numbers using Ananymous function\n");
console.log(sum(number));

let sum_array = (function (num) {
  return num.reduce((num1, num2) => num1 + num2);
})(number);
console.log("\nSum of array numbers using IIFE function\n");
console.log(sum_array);
