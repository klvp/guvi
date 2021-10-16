/** @format */

let fun = function (num, k) {
  for (let i = 0; i < k; i++) {
    num.push(num.shift());
  }
  console.log(num);
  let num1 = [1, 3, 5, 7, 9];
  for (let i = 0; i < k; i++) {
    num1.unshift(num1.pop());
  }
  console.log(num1);
};

let num = [1, 3, 5, 7, 9];
console.log("Array\n", num);
console.log("\n\nUsing Ananymous Function");

k = 3;
fun(num, k);

console.log("\n\n Using IIFE function");
num = [1, 3, 5, 7, 9];
let func = (function (num, k) {
  for (let i = 0; i < k; i++) {
    num.push(num.shift());
  }
  console.log(num);
  let num1 = [1, 3, 5, 7, 9];
  for (let i = 0; i < k; i++) {
    num1.unshift(num1.pop());
  }
  console.log(num1);
})(num, k);
