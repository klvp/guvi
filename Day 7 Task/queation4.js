/** @format */

class Uber {
  // car types : mini(3 seater) or prime(4 seater) or jumbo(7 seater)
  constructor(car_type, km, ac = false) {
    this.car_type = car_type;
    this.km = km;
    this.ac = ac;
    this.service_charge = 12;
    this.booking_fee = 10;
    this.tax = this.service_charge + this.booking_fee;
  }

  // get the price per km based on car type
  getprice() {
    if (this.ac != false) this.ac = 1;
    else this.ac = 0;
    if (this.car_type == "mini") return (10 + this.ac) * this.km + this.tax;
    else if (this.car_type == "prime")
      return (8.5 + this.ac) * this.km + this.tax;
    return (8 + this.ac) * this.km + this.tax;
  }
}

let mini_ac = new Uber("mini", 10, true);
console.log(`Charge for mini AC car for 10KM is : ${mini_ac.getprice()}`);
let mini_non_ac = new Uber("mini", 10);
console.log(
  `Charge for mini non AC car for 10KM is : ${mini_non_ac.getprice()}`
);
let prime_ac = new Uber("prime", 10, true);
console.log(`Charge for prime AC car for 10KM is : ${prime_ac.getprice()}`);
let prime_non_ac = new Uber("prime", 10);
console.log(
  `Charge for prime non AC car for 10KM is : ${prime_non_ac.getprice()}`
);
let jumbo_ac = new Uber("jumbo", 10, true);
console.log(`Charge for jumbo AC car for 10KM is : ${jumbo_ac.getprice()}`);
let jumbo_non_ac = new Uber("jumbo", 10);
console.log(
  `Charge for jumbo non AC car for 10KM is : ${jumbo_non_ac.getprice()}`
);
