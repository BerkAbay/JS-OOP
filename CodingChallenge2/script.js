class CarCl {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.brand} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed = this.speed - 10;
    console.log(`${this.brand} is brake at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.speedUS = 50;
console.log(ford);
