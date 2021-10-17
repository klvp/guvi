/** @format */
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < 11; i++) {
  new_string += numsArr[i];
}
console.log("\nprint array numbers without spaces");
console.log(new_string);

var new_string = "";

for (var i = 0; i < 11; i++) {
  if (i == 10) {
    new_string += numsArr[i];
    break;
  }
  new_string += numsArr[i] + ",";
}
console.log("\nprint array numbers with comma");
console.log(new_string);

var new_string = "";

for (var i = 10; i >= 0; i--) {
  new_string += numsArr[i] + " ";
}
console.log("\nprint array numbers with spaces in reverse order");
console.log(new_string);

for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 == 0) {
    numsArr[i] = "even";
  }
}
console.log("\nreplace even numbers with even text in array");
console.log(numsArr);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    numsArr[i] = "even";
  }
}
console.log("\nreplace even places with even text in array");
console.log(numsArr);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
  sum += numsArr[i];
}
console.log("\nAddition of array numbers");
console.log(sum);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 == 0) sum += numsArr[i];
}
console.log("\nAddition of even array numbers");
console.log(sum);

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 100;
for (var i = 0; i <= 10; i++) {
  if (numsArr[i] % 2 == 0) {
    sum += numsArr[i];
  } else {
    sum -= numsArr[i];
  }
}
console.log("\ncode to add the even numbers and subract the odd numbers");
console.log(sum);

var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
console.log("\ncode to print inner arrays");
for (var i = 0; i < numsArr.length; i++) {
  console.log(numsArr[i]);
}

var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var str_all = "";
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) str_all += inner_array[j];
}
console.log("\ncode to print elements in the inner arrays");
console.log(str_all);

var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var str_all = 0;
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++)
    if (j % 2 == 0) {
      inner_array[j] = "even";
    }
}
console.log(
  "\ncode to replace the array value — If the index is even, replace it with ‘even’."
);
console.log(numsArr);

var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var str_all = "";
for (var i = numsArr.length - 1; i >= 0; i--) {
  var inner_array = numsArr[i];
  for (var j = inner_array.length - 1; j >= 0; j--)
    str_all += inner_array[j] + " ";
}
console.log("\n code to print elements in the inner arrays in reverse");
console.log(str_all);

var numsArr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
];
var sum_odd = 0;
var sum_even = 0;
for (var i = 0; i < numsArr.length; i++) {
  var inner_array = numsArr[i];
  for (var j = 0; j < inner_array.length; j++) {
    if (inner_array[j] % 2 != 0) {
      sum_odd += inner_array[j];
    } else {
      sum_even += inner_array[j];
    }
  }
}
console.log(
  "\ncode to add elements in the inner arrays based on odd or even values"
);
console.log(sum_odd);
console.log(sum_even);
