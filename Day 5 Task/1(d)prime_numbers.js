/** @format */

number = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// ananymous function

let prime = function (num) {
  return num.filter((n) => {
    let count = 0;
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    if (count == 1) {
      return true;
    }
    return false;
  });
};
console.log("\nprimes numbers from an array using ananymous function\n");
console.log(prime(number));

let prime_array = (function (num) {
  return num.filter((n) => {
    let count = 0;
    for (let i = 2; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    if (count == 1) {
      return true;
    }
    return false;
  });
})(number);
console.log("\nprimes numbers from an array using IIFE function\n");
console.log(prime_array);
