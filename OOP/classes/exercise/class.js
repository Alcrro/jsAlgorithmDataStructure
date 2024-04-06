/*

! Classes
Exercise 1: 
	1.	Create a class called "Animal"
	2.	Allow to pass in 2 properties/fields to the
			Animal constructor which get set to the instance:
				- type (string)
				- name (string)
	3.	Create two instance of the Animal class of your
			choice passing in different "type" and "name" for each
	4.	Print out both animal instance
	5.	Change the "name" of one of your animals and print it out again

*/

//! implementation

//create class called Animal
class Animal {
  //create animal constructor
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

// create instance of the animals
const dog = new Animal("dog", "Randy");
const monkey = new Animal("monkey", "Jiuja");

console.log(dog);
console.log(monkey);

dog.name = "Bob";
monkey.name = "kary";
console.log(dog);
console.log(monkey);
