/*

! 	1.	factorial number
! 	2.	fibonacci sequence
! 	3.	isPrime
! 	4.	Power of two
! 	5. 	Recursion

*/

//! 	Factorial number

/*
Product of all numbers 

5! = 5*4*3*2*1		5! = 5 * 4!
4! = 4*3*2*1			4! = 4 * 3!
3! = 3*2*1				3! = 3 * 2!
2! = 2*1					2! = 2 * 1!
1! = 1						1! = 1 * 0!
0! = 1						0! = 1

! 	formula : n! = n * (n-1)!

*/
//! implementation

function factorialNumber(n) {
  //to do
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorialNumber(7));

//! fibonacci sequence

/*
sum of latest 2 numbers

fibonacci sequence starts with 0,1

*/

//! implementation

function fibonacciSequence(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
// console.log(fibonacciSequence(5));

//! is prime number

/*

is not a product of two smaller same numbers
sqrt to remove big numbers
ex: 5  true= 1*5  5*1
ex: 4  false= 1*4 4*1 2*2 

*/
//! implementation

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(7));

//! power of two

/*


bitwise 
&

*/

//! implementation

function powerOfTwo(n) {
  if (n < 2) {
    return false;
  }

  return (n & (n - 1)) === 0;
}
// console.log(powerOfTwo(3));

//! recursion

/*
a function which invoke it self 

*/

//! implementation
function recursion(n) {
  if (n < 2) {
    return n;
  }
  console.log(n);
  return recursion(n - 1);
}

console.log(recursion(10));
