// 1. factorial number
// 2. prime number
// 3. fibonacci sequence
// 4. power of two

//! Factorial number

//* pseudocode
//is a product of all numbers of a non-negative integer
// 0! = 1

function factorial(n) {
  //to do
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(0));
// console.log(factorial(5));
// console.log(factorial(8));
// console.log(factorial(11));

//? Big-O - O(n) - linear

//!====================================================================================

//! Prime number

//* pseudocode
// grater than 1 that 1 is not a product of two smaller natural numbers
// we can do sqrt to n to reduce bigger numbers
// divide by 2 to check if is integer or float

function isPrime(n) {
  //to do
  if (n < 2) {
    return false;
  }
  if (Math.sqrt(n) % 2 === 0) {
    return false;
  }
  return true;
}

// console.log(isPrime(1));
// console.log(isPrime(4));
// console.log(isPrime(5));

//? Big-O - O(sqrt(n)

//!====================================================================================

//! fibonacci sequence

//* pseudocode
// it's a sum of the latest two numbers
// first two numbers starts with 0 and 1
// make a loop , i = 2

function fibonacci(n) {
  //to do

  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibonacci(5));
// console.log(fibonacci(8));
// console.log(fibonacci(11));

//!====================================================================================

//! Power of two

//* pseudocode
// positive integer
// transform decimal number into binary number
// operator &
// 0 & 0 = 0
// 0 & 1 = 0
// 1 & 0 = 0
// 1 & 1 = 1

//? isPowerOfTwo(4)
// 4
// 4/2 = 0
// 2/2 = 0
// 1/2 = 1

// 4-1 =3
// 3/2 = 1
// 1/2 = 1

//&
// 0100
// 0011
//=====
// 0000 - true

//? isPowerOfTwo(8)

// 7
// 7/2 = 1
// 3/2 = 1
// 1/2 = 1

// 7-1 = 6
// 6/2 = 0
// 3/2 = 1
// 1/2 = 1

//&
// 0111
// 0110
// ====
// 0110 - false

// 8
// 8/2 = 0
// 4/2 = 0
// 2/2 = 0
// 1/2 = 1

// 8-1 = 7
// 7/2 = 1
// 3/2 = 1
// 1/2 = 1

// &
// 1000
// 0111
// ====
// 0000 - true

function isPowerOfTwo(n) {
  //to do
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(12));
