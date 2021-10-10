/** @format */

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.onload = function () {
  var t = JSON.parse(this.response);
  for (let i in t) {
    console.log(`\ncountry ${i} \n`);
    console.log("country : ", t[i].name.common);
    console.log("region : ", t[i].region);
    console.log("Sub-region : ", t[i].subregion);
    console.log("Population : ", t[i].population);
  }
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();
