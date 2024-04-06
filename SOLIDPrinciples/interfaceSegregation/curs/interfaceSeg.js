/*

! Interface segregation principle(ISP)

?	In Software engineering , the ISP states that no code should be forced to depend on methods it does not use

*/

//! implementation

// //!	WRONG Way
// interface EntityBad {
//   attackDamage: any;
//   health: any;
//   name: any;

//   move(): any;
//   attack(): any;
//   takeDamage(amount: any): any;
// }

// class CharacterBad implements EntityBad {
//   attackDamage: any;
//   health: any;
//   name: any;
//   move() {
//     //do something
//   }
//   attack() {
//     // do something
//   }
//   takeDamage(amount: any) {
//     // do something
//   }
// }

// class TurretBad implements EntityBad {
//   attackDamage: any;
//   health: any;
//   name: any;
//   attack() {
//     throw new Error("Method not implemented.");
//   }
//   takeDamage(amount: any) {
//     throw new Error("Method not implemented.");
//   }
//   move() {
//     //ERROR: Cannot move
//   }
// }

//? GOOD way

class EntityGood {
  constructor(name, attackDamage, health) {
    this.name = name;
    this.attackDamage = attackDamage;
    this.health = health;
  }
  move() {
    console.log(`${this.name} moved`);
  }
  attack(targetEntity) {
    console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
    targetEntity.takeDamage(this.attackDamage);
  }

  takeDamage(amount) {
    this.health -= amount;
    console.log(`${this.name} has ${this.health} health remaining`);
  }
}

class CharacterGood extends EntityGood {}

class Wall extends EntityGood {
  constructor(name, health) {
    super(name, 0, health);
  }
  move() {
    return null;
  }
  attack(targetEntity) {
    return null;
  }
}
class Turret extends EntityGood {
  constructor(name, attackDamage) {
    super(name, attackDamage, -1);
  }
  move() {
    return null;
  }
  attack() {
    return null;
  }
}

const turret = new Turret("Turret", 5);
const character = new CharacterGood("Character", 3, 100);
const wall = new Wall("Wall", 200);

turret.attack(character);
character.move();
character.attack(wall);
