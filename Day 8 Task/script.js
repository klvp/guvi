/** @format */

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.onload = function () {
  var t = JSON.parse(this.response);
  console.log("\n");
  console.log(
    "1 (a) Get all the countries from Asia continent /region using Filter function"
  );
  console.log("\n");
  t.filter((x) => x.region === "Asia").map((x) => console.log(x.name.common));

  console.log("\n");
  console.log(
    "1 (b) Get all the countries with a population of less than 2 lakhs using Filter function"
  );
  console.log("\n");
  t.filter((x) => x.population < 200000).map((y) => console.log(y.name.common));

  console.log("\n");
  console.log(
    "1 (c) Print the following details name, capital, flag using forEach function"
  );
  console.log("\n");
  t.forEach((element) => {
    console.log("\n", element.name.common, element.capital, element.flags.png);
  });

  console.log("\n");
  console.log(
    "1 (d) Printing the total population of countries using reduce function"
  );
  console.log("\n");
  console.log(t.map((x) => x.population).reduce((num1, num2) => num1 + num2));

  console.log("\n");
  console.log(
    "1 (e) Printing the countries which uses US Dollars as currency."
  );
  console.log("\n");
  t.filter((y) => {
    for (let i in y.currencies) {
      if (i === "USD") {
        return true;
      }
    }
  }).map((y) => console.log(y.name.common));
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();
