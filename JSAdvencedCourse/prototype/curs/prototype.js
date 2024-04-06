/*

! prototype 
! prototype inheritance
*/

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person("Alex", "cristi");
const person2 = new Person("Alex2", "cristi2");

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

//!========================

//! prototype inheritance

function SuperHero(fName, lName) {
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
  console.log("Fighting crime");
};

SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero("Bruce", "Wayne");
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());
