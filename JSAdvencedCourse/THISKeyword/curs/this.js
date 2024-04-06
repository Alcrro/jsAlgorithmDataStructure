/*

! THIS

? 	1. The JS this keyword which is used in a function, refers to the object it belongs to
? 	2. It makes functions reusable by letting you decide the object value
?		3. This value is determined entirely by how a function is called 


! How to determine "this"?
?	Implicit binding
?	Explicit binding
?	New binding
?	Default binding
*/

//! implementation

// function sayMyName(name) {
//   console.log(`My name is ${name}`);
// }

// sayMyName("Alexandru Roventa");
// sayMyName("Cristi B");

//! implicit binding
const person = {
  name: "Alex",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

person.sayMyName();

//!==========================

//! Explicit binding
function sayMyName2() {
  console.log(`My name is ${this.name}`);
}
sayMyName2.call(person);

//!=================================

//! new binding
function Person(name) {
  // this={}
  this.name = name;
}
const p1 = new Person("Alex");
const p2 = new Person("Cristi");

//! default binding
sayMyName2(); // undefined
