/** @format */

let a = {
  name: "klvp",
  age: 23,
};
let b = {
  age: 23,
  name: "klvp",
};
let count = 0;
let properties = Object.keys(a);
for (let key of properties) {
  if (a[key] == b[key]) {
    count++;
  }
}
if (count == properties.length) {
  console.log("Given JSON's are same");
} else {
  console.log("Given JSON's are not same");
}
