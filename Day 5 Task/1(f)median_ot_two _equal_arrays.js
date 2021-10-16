/** @format */

let median = function (arr3) {
  return (arr3[arr3.length / 2 - 1] + arr3[arr3.length / 2]) / 2;
};

let arr1 = [-5, 3, 6, 12, 15];
let arr2 = [-12, -10, -6, -3, 4];
let arr3 = [...arr1, ...arr2].sort((x, y) => x - y);
console.log("Sorted array after combining two arrays");
console.log(arr3);

console.log("\nUsing Ananymous Function\n", median(arr3));

let median_IIFE = (function (arr3) {
  return (arr3[arr3.length / 2 - 1] + arr3[arr3.length / 2]) / 2;
})(arr3);
console.log("\n Using IIFE function \n", median_IIFE);
