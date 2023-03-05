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

// // ES6 Classes
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2040 - this.birthYear);
//   }

//   // Setters and getters
//   get age() {
//     return 2060 - this.birthYear;
//   }
// }

// const mesut = new PersonCl('Mesut', 2000);
// mesut.calcAge();
// console.log(mesut.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hi! ${this.firstName}`);
// };
// mesut.greet();

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
//////////////////////////////////////////////
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
//////////////////////////////////////////////
// Inheritence between "classes" ES6 classes
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2040 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  // Setters and getters
  get age() {
    return 2060 - this.birthYear;
  }
  // static method
  static hey() {
    console.log('Hey there !');
  }
}
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    // ALWAYS NEED TO HAPPEN FİRST !!!!!
    super(firstName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  }
}
// StudentCl.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

const burak = new StudentCl('Burak', 2000, 'Algorithm');
burak.introduce();
burak.calcAge();

//////////////////////////////////////////////
// Inheritence between "classes" Object.create

const Person_Proto = {
  calcAge() {
    console.log(2048 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
////////////////////////////////////
// BANKIST APPLICATION EXAMPLE WITH CLASS

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private field
  #movements = [];
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;

    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening account, ${this.owner}`);
  }

  // 3) Public methods

  // public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
  }

  withdraval(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}
const acc1 = new Account('Berk', 'TRY', 1111);

acc1.deposit(1200);
acc1.withdraval(250);

acc1.requestLoan(3200);
acc1.approveLoan(180);

console.log(acc1.deposit);
