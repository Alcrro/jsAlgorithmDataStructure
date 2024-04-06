const logMessage = require("./module/logger");
/*

! Single responsibility

?	A module(class,function,module) should be responsible to one, and only one.


*/

//!Implementation

//!WRONG
class CaloriesTrackerBad {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      this.displayCalorieSurplus();
    }
  }

  //!violate single responsibility
  //! this class has not single responsibility principle
  //! if we want to change this method we need to change entire class and won't to change in multiple parts

  displayCalorieSurplus() {
    console.log(`Max calories exceeded`);
  }
}

//? GOOD
class CaloriesTrackerGood {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage("Max calories exceeded ");
    }
  }
  getMaxCalories() {
    return this.maxCalories;
  }
}

const calories = new CaloriesTrackerGood(2000);

console.log(calories.maxCalories);
console.log(calories.currentCalories);
calories.trackCalories(500);
console.log(calories.currentCalories);
calories.trackCalories(1500);
calories.trackCalories(500);

console.log(calories.getMaxCalories());
