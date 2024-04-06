// 1. prime number
// 2. fibonacci sequence
// 3. power of two
// 4. factorial number

//! Prime number

//
function isPrime(n) {
  //to do

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

// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));

//! Fibonacci sequence

//*PSEUDO CODE

// 1. is a sum of latest 2 numbers
// 2. first sequence starts with [0,1]

function fibonacci(n) {
  //to do
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(8));
// console.log(fibonacci(11));

//! power of two

//*PSEUDOCODE
// non negative number grater than 1
// check if exist the power of
// 1 & 0 === 0
// 0 & 1 === 0
// 0 & 0 === 0

//! number -> binary number
// 1 -> 1					// 6 -> 110
// 2 -> 10				// 7 -> 111
// 3 -> 11				// 8 -> 1000
// 4 -> 100				// 9 -> 1001
// 5 -> 101				// 10 -> 1010

//		1 -> 0001				2 -> 0010				3 -> 0011				4 -> 0100
//		0 -> 0000				1 -> 0001				2 -> 0010				3 -> 0011
//		---------				---------				---------				---------
//		0 -> 0000				0 -> 0000				0 -> 0000				0 -> 0000

function isPowerOfTwo(n) {
  //to do
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
// console.log(isPowerOfTwo(3));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(4));

//! factorial number

// grater then 0 and is a product of all numbers
// 0! = 1

function factorial(n) {
  // to do
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(4));
// console.log(factorial(7));
