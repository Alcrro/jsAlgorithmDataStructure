/*
! Inheritance and Polymorphism

*/

//! implementation

// super-class
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
  walk(phrase) {
    console.log(`${this.name} says: ${phrase}`);
  }
}
// sub class
class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
  }
  walk(phrase) {
    console.log(`${this.name} says: ${phrase}!!!!`);
  }
}
// sub class
class Wizard extends Player {
  constructor(name, hp, mp, items, wand) {
    super(name, hp, mp, items);
    this.wand = wand;
  }
  walk(phrase) {
    console.log(`${this.name} says: ${phrase} magical!`);
  }
}
// sub class
class Bartender extends Player {
  constructor(name, hp, mp, items, mug) {
    super(name, hp, mp, items);
    this.mug = mug;
  }
}

const player = new Player("Player", 100, 20, []);
// console.log(player);
const warrior = new Warrior("Genghis Khan", 300, 50, ["Sabre"], "Leather Shield");
const wizard = new Wizard("Wizard", 100, 80, ["Pointy Hat"], "Elder Wand");
const bartender = new Bartender("Moe", 220, 180, ["Apron", "Napkin"], "Crystal Mug");
// console.log(warrior);
// console.log(wizard);
// // warrior.speak();
// console.log(warrior instanceof Warrior);
// console.log(warrior instanceof Player);

//! Polymorphism Example

const players = [warrior, wizard, bartender];

for (const player of players) player.walk("I can Walk");
