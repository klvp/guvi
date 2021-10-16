/** @format */
let reverse = function (str) {
  if (str == "") {
    return "";
  }
  return reverse(str.substr(1)) + str.charAt(0);
};

text = "mam dam appa appi akka ammi amma";

// Ananymous function

let polindrome = text.split(" ").filter((word) => reverse(word) === word);
console.log("\n polindromes from an array using Ananymous function\n");
console.log(polindrome);

// IIFE

let polindrome_array = text.split(" ").filter((x) =>
  (function (word) {
    var newString = "";
    for (var i = word.length - 1; i >= 0; i--) {
      newString += word[i];
    }
    return newString === x;
  })(x)
);
console.log("\n polindromes from an array using IIFE function\n");
console.log(polindrome_array);
