'use strict';

// Constructor and functions
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

// ES6 Classes
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2040 - this.birthYear);
  }

  // Setters and getters
  get age() {
    return 2060 - this.birthYear;
  }
}

const mesut = new PersonCl('Mesut', 2000);
mesut.calcAge();
console.log(mesut.age);

PersonCl.prototype.greet = function () {
  console.log(`Hi! ${this.firstName}`);
};
mesut.greet();

// Object.create

const PersonProto = {
  calcAge() {
    console.log(2048 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const ümit = Object.create(PersonProto);
ümit.birthYear = 'Ümit';
ümit.birthYear = 1977;
ümit.calcAge();

// Inheritance between " Classes": Constructor functions
const Student = function (firstName, course, birthYear) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const enes = new Student('Enes', 'Math', 2004);
enes.introduce();
enes.calcAge();

Student.prototype.constructor = Student;

console.log(enes instanceof Student);
console.log(enes instanceof Person);
console.log(enes instanceof Object);

// console.log(enes.__proto__);
