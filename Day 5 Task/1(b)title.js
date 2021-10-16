/** @format */

let text = "i am very happy";
let title = function (str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
console.log("\nTitle case of text using Ananymous function\n");
console.log(title(text));

let Title = (function (str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
})(text);
console.log("\nTitle case of text using IIFE function\n");
console.log(Title);
