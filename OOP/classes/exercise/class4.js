/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/

class Player {
  lives = 3;
  shootingDelay = 2000; // ms
  yPos = 500;
  xPos = 500;
  // constructor() {}
}
class Enemy {
  hp = 1;
  shootingDelay = 9000; // ms
  yPos;
  xPos;
  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  }
}

const spaceShip = new Player();
const flyingAlien = new Enemy(10, 10);
console.log(spaceShip);
console.log(flyingAlien);
