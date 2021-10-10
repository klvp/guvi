/** @format */

var xhr = new XMLHttpRequest();
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.onload = function () {
  var t = JSON.parse(this.response);
  for (let i in t) {
    console.log(`\ncountry ${i} \n`);
    console.log("Flag : ", t[i].flags.svg);
  }
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();
