/** @format */

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

function create_object(title, studio, rating) {
  return new Movie(title, studio, rating);
}

function getPG(list) {
  return list.filter((film) => film.rating === "PG");
}

let film1 = new Movie("Lion King", "Simba", "G");
let film2 = new Movie("La Casa De Papel", "Netflix");
let film3 = new Movie("The 100", "NCS", "PG13");
let film4 = new Movie("Siren", "Box Office");
let film5 = new Movie("ZOO", "Lions Gate");

console.log("\nBelow is the output for the question 1(a)\n");
console.log(film1);
console.log("\nBelow is the output for the question 1(b)\n");
console.log(film2);
console.log("\nBelow is the output for the question 1(c)\n");
console.log(getPG([film1, film2, film3, film4, film5]));
console.log("\nBelow is the output for the question 1(d)\n");

let film = create_object("Casino Royale", "Eon Productions", "PG13");
console.log(film);
