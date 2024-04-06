/*
    Let's see how a "Factory" class/function might work

    1. Create a class called "EnemyFactory"

    2. Make the following work to produce the output shown:

    const factory = new EnemyFactory();
    const flying = factory.generateFlyingEnemy("batman");
    flying.fly(); // batman can fly!

    const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
    swimming.swim(); // aquaman can swim!

    * What is the difference between these two? When might you
      even use this? Where are the property keys of each of these:
      - EnemyFactory
      - factory
      - factory.__proto__
      - flying.__proto__
      - swimming.__proto__
*/

//! implementation

// class Factory {
//   constructor() {}
// }

class EnemyFactory {
  generateFlyingEnemy(name) {
    return new (class FlyingEnemy {
      constructor(flyingEnemyName) {
        this.name = flyingEnemyName;
      }
      fly() {
        console.log(`${this.name} can flay`);
      }
    })(name);
  }

  // fly(name) {
  //   console.log(`${name} can fly`);
  // }
}
EnemyFactory.generateSwimmingEnemy = function (name) {
  class SwimmingEnemy {
    name = name;

    swim() {
      console.log(`${this.name} can swim!`);
    }
  }
  return new SwimmingEnemy(name);
};
// EnemyFactory.generateFlyingEnemy = function (name) {
//   this.name = name;
// };
const factory = new EnemyFactory();
const flying = factory.generateFlyingEnemy("Batman");
flying.fly();

const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");

swimming.swim();
