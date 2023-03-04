const Car = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.brand} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 10;
  console.log(`${this.brand} is brake at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 110);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
