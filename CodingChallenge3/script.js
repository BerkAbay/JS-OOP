// class Car {
//   constructor(brand, curSpeed) {
//     this.brand = brand;
//     this.curSpeed = curSpeed;
//   }
//   accelerate() {
//     this.curSpeed = this.curSpeed + 20;
//   }
// }

// const Ev = function (brand, curSpeed, chargeBattery) {
//   Car.call(this, brand, curSpeed, chargeBattery);
//   this.chargeBattery = chargeBattery;
// };
// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.infoCar = function () {
//   console.log(
//     `${this.brand} going at ${this.curSpeed} km/h, with a charge of ${this.chargeBattery}`
//   );
// };

// const tesla = new Ev('Tesla', 120, 23);
// tesla.infoCar();

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

const EV = function (brand, speed, charge) {
  Car.call(this, brand, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed = this.speed + 20;
  this.charge = this.charge - 1;
  console.log(
    `${this.brand} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.accelerate();
