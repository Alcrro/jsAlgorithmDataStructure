/*
Problem: How many ways you can climbing staircase?
You can either climb 1 step or 2 steps at a time
*/

//*idea

/*

climbingStaircase(1) = 1			| (1)
climbingStaircase(2) = 2			| (1,1) and (2)
climbingStaircase(3) = 3			| (1,1,1) (1,2) and (2,1)
climbingStaircase(4) = 5			| (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) (2,2)
*/

function climbingStaircase(n) {
  let stairStart = [1, 2];

  for (let i = 2; i < n; i++) {
    stairStart[i] = stairStart[i - 1] + stairStart[i - 2];
  }

  return stairStart[n - 1];
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(4));
