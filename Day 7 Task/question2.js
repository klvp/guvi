/** @format */

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getRadius() {
    return this.radius;
  }
  setRadius(radius) {
    this.radius = radius;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
  toString() {
    return `Circle [radius=${this.radius},color=${this.color}]`;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

let c1 = new Circle(Math.ceil(Math.random() * 5), "green");
c1.setRadius(2.5);
console.log(c1.getRadius());
c1.setColor("pink");
console.log(c1.getColor());
console.log(c1.toString());
console.log(c1.getArea());
console.log(c1.getCircumference());
