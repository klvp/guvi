/** @format */

class Person {
  constructor(name, technology, experience_years, email, phone, ...languages) {
    this.name = name;
    this.technology = technology;
    this.experience_years = experience_years;
    this.email = email;
    this.phone = phone;
    this.languages = languages;
  }
}

let klvp = new Person(
  "Lakshmi Vara Prasad Kuna",
  "Full Stack Developer",
  2,
  "klvp@gmail.com",
  8328073469,
  "python",
  "javascript",
  "C Pragramming",
  "reactJS",
  "nodeJS",
  "mongoDB",
  "HTML5",
  "CSS3"
);

console.log(klvp);
