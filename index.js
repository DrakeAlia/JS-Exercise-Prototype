/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) { /* arguments and constructor object */
  this.name = name;
  this.age = age; /* data objects */
  this.stomach = []; /* empty array */
}

Person.prototype.eat = function (food) { /* Person the ability to "eat" */
  if (this.stomach.length < 10){ /* 10 items in stomach for the eat method */
    this.stomach.push(food); /* pushed */
  }
}

Person.prototype.poop = function () { /* Person the ability to "poop" */
  this.stomach = []; /* empty stomach array */
}

Person.prototype.toString = function () {
  return `${this.name} + ${this.age}`; /* return string */
}

const newPerson = new Person({name: "Vito", age: 50, stomach:[]}); 

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) { /* arguments */
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0; /* initialize with a tank at 0 */
  this.odometer = 0; /* initialize with an odometer at 0 */
}

Car.prototype.fill = function (gallons) { /* the method for filling the tank in gallons */
  this.tank = this.tank + gallons;
}

Car.prototype.drive = function (distance) { /* car's distance */
  this.odometer = this.odometer + distance; /* odameter's distance is increasing */
  this.tank = this.tank - distance / this.milesPerGallon; /* tank is decreasing taking milesPerGallon */
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) { /* constructor subclassing for Person */
  Person.call(this, name, age);  
  this.favoriteToy = favoriteToy; /* third argument for favoriteToy */
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}`; /* the return string for playing with favoriteToy */
};

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window or Default binding - Is the most common case for function calls and call any function without a "." before it. EX: 'use strict'; function foo() {console.log(this) } foo();
  2. Implicit binding - Calling a function with a "." before it. using the value of this is the object just before the final "." EX: const obj = {foo(){ console.log(this); }}; obj.foo();
  3. Explicit binding - Using one of the three functions call, apply, or bind in function objects. All three provide the value of this. EX: const obj = {}; function foo() { console.log(this); } const functionWithBoundThis = foo.bind(obj); functionWithBoundThis(); 
  4. New binding - Is when the function that is called with new operator when the code new Something(...) is excuted. /Have to conme back to this question/

*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
