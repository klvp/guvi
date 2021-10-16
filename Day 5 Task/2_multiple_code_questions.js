/** @format */

// addFive
console.log("\n addFive\n");
var num = 10;
function addFive(num) {
  return num + 5;
}
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));

console.log("\n getOpposite\n");
// getOpposite

var num = 5;
function getOpposite(num) {
  if (typeof num === String) {
    return -1;
  } else if (num % 1 != 0) {
    return -1;
  } else if (num == 0) {
    return 0;
  }
  return -1 * num;
}
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));

// Minutes to seconds
console.log("\nminutes to seconds\n");

var min = 5;
function toSeconds(min) {
  return min * 60;
}
console.log(toSeconds(min));

// Strings to Integer
console.log("\nString to integer\n");

var mystr = "5";
function toInteger(mystr) {
  return +mystr;
}
console.log(toInteger(mystr), typeof toInteger(mystr));

// increment by 1
console.log("\nIncrement by 1\n");

var myint = 0;
function nextNumber(myint) {
  return myint + 1;
}
console.log(nextNumber(myint));

// return first element of the array
console.log("\nreturn first element of the array\n");

var arr = [10, 20, 30];
function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement(arr));

// hours to seconds
console.log("\nhours to seconds\n");

var arr = [1, 2, 3];
function hourToSeconds(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 3600);
  }
}
hourToSeconds(arr);

// Perimeter of a rectangle
console.log("\nPerimeter of a rectangle\n");

function findPerimeter(l, b) {
  peri = 2 * (l + b);
  return peri;
}
console.log(findPerimeter(10, 7));

// Sum of 2 numbers should be less than 100
console.log("\nSum of 2 numbers should be less than 100\n");

function lessThan100(num1, num2) {
  if (num1 + num2 < 100) {
    return true;
  }
  return false;
}
var res = lessThan100(22, 15);
console.log(res);

// Remainder of a division
console.log("\nRemainder of a division\n");

function remainder(num1, num2) {
  return num1 % num2;
}
console.log(remainder(1, 3));

// Old macdonald had a farm
console.log("\nOld macdonald had a farm\n");

function CountAnimals(tur, horse, pigs) {
  return tur * 2 + horse * 4 + pigs * 4;
}
console.log(CountAnimals(2, 3, 5));

// Frames per second
console.log("\nFrames per second\n");

function frames(num1, num2) {
  fps = num1 * 60 * num2;
  return fps;
}
var fps = frames(1, 2);
console.log(fps);

// Checking if num is divisible by 5
console.log("\nChecking if num is divisible by 5\n");

function divisibleByFive(num1) {
  if (num1 % 5 === 0) return true;
  else return false;
}
var divisible = divisibleByFive(5);
console.log(divisible);

// isEven
console.log("\nisEven\n");

function isEven(num) {
  if (num % 2 === 0) return true;
  else if (num === "11h") return -1;
  return false;
}
console.log(isEven(12));
console.log(isEven(0));
console.log(isEven(11));
console.log(isEven("11h"));

// areBothOdd
console.log("\nareBothOdd\n");

function areBothOdd(num1, num2) {
  if (num1 % 2 !== 0 && num2 % 2 !== 0) return true;
  return false;
}
console.log(areBothOdd(1, 3));
console.log(areBothOdd(1, 4));
console.log(areBothOdd(2, 3));
console.log(areBothOdd(0, 0));

//getFullName
console.log("\ngetFullName\n");

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName("GUVI", "GEEK"));
console.log(getFullName("GUVI", ""));
console.log(getFullName("GEEK", ""));
console.log(getFullName('""', ""));

//getLengthOfWord
console.log("\ngetLengthOfWord\n");

function getLengthOfWord(word1) {
  if (typeof word1 == "undefined" || typeof word1 == "number") {
    return -1;
  }
  return word1.length;
}
console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));

//isSameLength
console.log("\nisSameLength\n");

function isSameLength(word1, word2) {
  if (word2.length === word1.length) return true;
  return false;
}
console.log(isSameLength("GUVI", "GEEK"));

//distance between two points
console.log("\ndistance between two points\n");

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(getDistance(100, 100, 400, 300));

//getNthElement
console.log("\ngetNthElement\n");

function getNthElement(array, n) {
  return array[n];
}
console.log(getNthElement([1, 3, 5], 1));

//getLastElement
console.log("\ngetLastElement\n");

function getLastElement(array) {
  var lastElement = array.length - 1;
  if (lastElement === 0) return -1;
  return array[lastElement];
}
console.log(getLastElement([1, 2, 3, 4]));

//getProperty
console.log("\ngetProperty\n");

var obj = {
  mykey: "value",
};
function getProperty(obj, key) {
  for (let str in obj) {
    if (key === str) return obj[key];
    return "NA";
  }
}
console.log(getProperty(obj, "mykey"));
console.log(getProperty(obj, "dummykey"));

//removeProperty
console.log("\nremoveProperty\n");

var person = {
  name: "Dattatreya",
  age: 23,
};
function removeProperty(person, key) {
  delete person[key];
  return person;
}
var output = removeProperty(person, "age");
console.log(person.age);

//addProperty
console.log("\naddProperty\n");

var obj = {};
function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}
console.log(addProperty(obj, "mykey"));

//Count of positive numbers and sum of negative nummbers in array
console.log(
  "\nCount of positive numbers and sum of negative nummbers in array\n"
);

var num = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

function result(num) {
  console.log([
    num.filter((x) => x >= 0).length,
    num.filter((x) => x < 0).reduce((a, b) => a + b),
  ]);
}

console.log(result(num));

//positive numbrers from array
console.log("\npositive numbrers from array\n");

var num = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives(num) {
  var result = num.filter((a) => a >= 0);
  console.log(result);
}

getPositives(num);

//power of 2
console.log("\npower of 2\n");

function powersOfTwo(n) {
  var res = [];
  for (let i = 0; i <= n; i++) {
    res.push(2 ** i);
  }
  return res;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));

//Maximum number in an array
console.log("\nMaximum number in an array\n");

var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function max(arr) {
  return Math.max(...arr);
}
console.log(max(num));

//First 100 prime numbers
console.log("\nFirst 100 prime numbers\n");

printPrimes(100);

function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " --> ", i);
      n++;
    }

    i++;
  }
}
// Returns true if a number is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);
  for (var i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//n prime numbers after given number
console.log("\n n prime numbers after given number\n");

console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt) {
  var ar = [];
  var i = startAt;
  while (ar.length < nPrimes) {
    if (isPrime(i)) {
      ar.push(i);
    }

    i++;
  }
  return ar;
}
// Returns true if a number is prime
function isPrime(n) {
  if (n < 2) return false;

  if (n == 2) return true;

  var maxDiv = Math.sqrt(n);

  for (var i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// reverse a string
console.log("\n reverse a string \n");

let reverse = function (str) {
  if (str == "") {
    return "";
  }
  return reverse(str.substr(1)) + str.charAt(0);
};

console.log(reverse("GUVI"));

// merge two arrays
console.log("\n merge two strings \n");

var merge = function (arr1, arr2) {
  return [...arr1, ...arr2];
};
var arr1 = [-5, 3, 6, 12, 15];
var arr2 = [-12, -10, -6, -3, 4];
console.log(merge(arr1, arr2));

// sum of Comma separated Values
console.log("\n sum of Comma separated Values \n");

var CSV = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";

var result = CSV.split(",")
  .map(Number)
  .reduce((a, b) => a + b);
console.log(result);
