'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const berk = new Person('Berk', 2001);

// Prototypes

Person.prototype.calcAge = function () {
  console.log(2040 - this.birthYear);
};

berk.calcAge();
