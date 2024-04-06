/*

! What is Object Oriented Programming (OOP)

?		Is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data
?	 field that has unique attributes and behavior.


! What is the structure of object-oriented programming?

?The structure, or building blocks, of object-oriented programming include the following:

?			-	Classes are user-defined data types that act as the blueprint for individual objects, attributes and methods.
?			-	Objects are instances of a class created with specifically defined data. Objects can correspond to real-world objects or an abstract entity. When class
?		is defined initially, the description is the only object that is defined.
?			-	Methods are functions that are defined inside a class that describe the behaviors of an object. Each method contained in class definitions starts with 
?		a reference to an instance object. Additionally, the subroutines contained in an object are called instance methods. Programmers use methods for
?		reusability or keeping functionality encapsulated inside one object at a time.
?			-	Attributes are defined in the class template and represent the state of an object. Objects will have data stored in the attributes field. Class 
?		attributes belong to the class itself.

*/

/*

! JS  Specifics

? 	- JS is NOT a traditional "OOP language"
?		-	"Classes" are build on top of Prototypes
?		-	We have an actual "Object" type in JS
? 	- We can "simulate" most/all of the core OOP concepts

*/

//! implementation

//? defined a class Human
class Human {
  //?creating and initializing an object instance of that class
  constructor() {
    //? attribute
    this.name = "Bob";
  }

  walk() {
    console.log(this.name + " can walk");
  }
}
//? new - create an instance of a use-defined
// const bob = new Human();
// bob.walk();

//!====================================================

//! implementation Fantasy game

//! with class

class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
  speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}

const tarzan = new Player("Tarzan", 100, 60, ["rope"]);
console.log(tarzan);
console.log(Object.getOwnPropertyNames(tarzan));
console.log(Object.getOwnPropertyNames(tarzan.__proto__));
tarzan.speak("haahahaa");

//! with function

function AnotherPlayer(name, hp, mp, items) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;

  //in this case, speak is not prototype,is a instance of object
  //move that instance into prototype
  // this.speak = (phrase) => {
  // 	console.log(`${this.name} says: ${phrase}`)
  // };
}

// create a prototype of AnotherPlayer
AnotherPlayer.prototype.speak = function (phrase) {
  console.log(`${this.name} says: ${phrase}`);
};
const spiderMan = new AnotherPlayer("Spider man", 150, 30, ["costume"]);
console.log(spiderMan);
console.log(Object.getOwnPropertyNames(spiderMan));
console.log(Object.getOwnPropertyNames(spiderMan.__proto__));
spiderMan.speak("Yooohooo");
