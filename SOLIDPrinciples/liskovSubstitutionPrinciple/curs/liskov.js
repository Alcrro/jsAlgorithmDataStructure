/*
! Liskov Substitution Principle

? 	If S is a subtype of T,then objects of type T may be replaced with objects of type S

? Ex : if we have class Animals in every single place that you use the animal class , you should be able to 
? 			replace it with one of its subclasses.

?	 If we have another class called dog which inherits from Animal than every single place what we use Animal
?			we should be able to use dog and it's going to work just well as it did before
*/

// //! WRONG Way
// class Bird {
//   fly() {
//     console.log("I can fly");
//   }
// }

// class Duck extends Bird {
//   quack() {
//     console.log("I can quack");
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error("Cannot fly");
//   }

//   swim() {
//     console.log("I can swim");
//   }
// }
// //! not all birds can fly
// //! all subclass should be able to work
// function makeBirdFly(bird) {
//   bird.fly();
// }

// const duck = new Duck();
// const penguin = new Penguin();
// makeBirdFly(duck);
// makeBirdFly(penguin);

//? GOOD way
class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}
class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird) {
  bird.fly();
}
function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();
makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
