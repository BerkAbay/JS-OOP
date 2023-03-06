const CarCl = function (brand, speed) {
  this.brand = brand;
  this.speed = speed;
};

CarCl.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.brand} is going at ${this.speed} km/h`);
};

CarCl.prototype.brake = function () {
  this.speed = this.speed - 10;
  console.log(`${this.brand} is brake at ${this.speed} km/h`);
};

class EvCl extends CarCl {
  #charge;
  constructor(brand, speed, charge) {
    super(brand, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  accelerate() {
    this.speed = this.speed + 20;
    this.#charge = this.#charge - 1;
    console.log(
      `${this.brand} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    );
  }
}
const honda = new EvCl('Honda', 180, 23);
