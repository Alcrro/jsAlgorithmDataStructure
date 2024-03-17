//find a pattern

// 5! = 5*4*3*2*1		5*2!
// 4! = 4*3*2*1			4*3!
// 3! = 3*2*1				3*2!
// 2! = *2*1				2*1!
// 1! = 1*1					1*0!
// 0! = 1

// formula: n! = n * (n-1)

function recursiveFactorial(n) {
  //to do
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(3));
