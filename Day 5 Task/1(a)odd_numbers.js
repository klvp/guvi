/** @format */

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ananymous function

let odd = function (num) {
  return num.filter((x) => x % 2 != 0);
};
console.log("\nOdd numbers from an array using Ananymous function\n");
console.log(odd(number));

// IIFE

let odd_numbers = (function (num) {
  return num.filter((x) => x % 2 != 0);
})(number);
console.log("\nOdd numbers from an array using IIFE function\n");
console.log(odd_numbers);
