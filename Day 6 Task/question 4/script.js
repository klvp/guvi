/** @format */

aa = (f, s, t) => {
  console.log(f, s, t);
  if (f > s && f > t) {
    console.log(f);
  } else if (s > f && s > t) {
    console.log(s);
  } else {
    console.log(t);
  }
};
console.log("\nLargest on three");
aa(1, 2, 3);

let n = "123";
console.log("\ncode to Sum of the digits present in the number");
console.log(add(n));
function add(n) {
  let sum = 0;
  for (var i = 0; i < n.length; i++) {
    sum += +n[i];
  }
  return sum;
}

var arr = [9, 8, 5, 6, 4, 3, 2, 1];
console.log("\ncode to Sum of all numbers using IIFE function");
(function (arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
})(arr);

arr = ["guv", "geek", "zen", "fullstack"];
var ano = function (arro) {
  for (var i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
};
console.log("\n code to get Title caps.");
ano(arr);

var newArray = [1, 3, 2, 5, 10];
const myPrime = newArray.filter((num) => {
  var c = 0;
  for (let i = 3; i <= num; i++) {
    if (num % i === 0) {
      c++;
    }
  }
  if (c == 1) {
    return true;
  }
  return false;
});
console.log("\ncode to return the Prime numbers");
console.log(myPrime);

var num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sum = (a, b) => a + b;
sum = num.reduce(sum);
console.log("\ncode to sum the number in that array");
console.log(sum);

var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
console.log(
  "\n code to rotate an array by k times and return rotated array using IIFE function"
);
(function (arr) {
  out = arr.slice(k + 1, arr.length);
  var count = out.length;
  for (var i = 0; i < k + 1; i++) {
    out[count] = arr[i];
    count += 1;
  }
  console.log(out);
})(arr);

var arr = ["guvi", "geek", "zen", "fullstack"];
console.log("\ncode to gen Title caps using IIFE");
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
  }
})(arr);

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
console.log("\nall odd numbers in an array using IIFE function");
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
})(arr);

console.log("\ncode to reverse.");
(function (str) {
  str1 = str.split("").reverse().join("");
  console.log(str1);
})("abcd");

var res = function (arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == i) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
};
console.log("\ncode to remove duplicates. ");
res(["guvi", "geek", "guvi", "duplicate", "geeK"]);

var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as
  .filter((a) => a % 2 != 0)
  .reduce(function (a, c) {
    return a + c;
  });
console.log("\nSum of odd numbers in an array ");
console.log(s);

var aa = (data) => {
  var a = data;
  var l = "";
  for (i = 0; i < a.length - 1; i++) {
    var s = a[i + 1];
    var b = a[i];
    l += s;
    l += b;
    i = i + 1;
  }
  if (a.length % 2 != 0) {
    l += a[a.length - 1];
  }
  console.log(l);
};
console.log("\nSwap the odd and even digits");
aa("1234");
