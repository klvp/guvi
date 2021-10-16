/** @format */

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// odd numbers using arrow function
console.log("\n odd numbers using arrow function \n");
let odd = number.filter((x) => x % 2 != 0);
console.log(odd);

// Title Case Text using arrow function
console.log("\n Title Case Text using arrow function \n");

var text = "i am very happy";
let title = text
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
console.log(title);

// Sum of array using arrow function
console.log("\n Sum of array using arrow function \n");

let sum_array = number.reduce((num1, num2) => num1 + num2);
console.log(sum_array);

// prime numbers in an array using arrow function
console.log("\n prime numbers in an array using arrow function \n");

number = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let prime = number.filter((n) => {
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

console.log(prime);

// polindromes of array using arrow function
console.log("\n polindromes of array using arrow function \n");

text = "mam dam appa appi akka ammi amma";
let reverse = function (str) {
  if (str == "") {
    return "";
  }
  return reverse(str.substr(1)) + str.charAt(0);
};
let polindrome = text.split(" ").filter((word) => reverse(word) === word);

console.log(polindrome);
