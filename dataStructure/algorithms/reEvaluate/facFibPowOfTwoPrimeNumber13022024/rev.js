// 1. factorial number
// 2. fibonacci sequence
// 3. power of two
// 4. prime number

//! factorial number

//* factorial idea
// calculate a product of all numbers
// 0! = 1

//ex:

// 5!
// 5!=5*4!
// 4!=4*3!
// 3!=3*2!
// 2!=2*1!
// 1!=1*0!
// 0!=1!

//formula
// n!= n * (n-1)!

function factorial(n) {
  //to do
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//? Big-O O(n)
function factorial(n) {
  if (n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(4));

//!================================================================================

//! fibonacci sequence

// sum of latest 2 numbers
// fib n starts with 0,1

function fibonacci(n) {
  //to do
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibonacci(1));
// console.log(fibonacci(9));

//? Big-O O(n) linear

//!================================================================================

//! power of two

//* idea
// transform number in binary
// use &

//5 in binary is:
// 5/2 - 1
// 2/2 - 0
// 1/2 - 1

// 5-1
// 4/2 - 0
// 2/2 - 0
// 1/2 - 1

// 101
// 100
//=====
// 100 false

function powOfTwo(n) {
  //to do
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// console.log(powOfTwo(4));
// console.log(powOfTwo(5));

//? Big-O O(log n)

////!================================================================================

//! prime number

//* idea
// the numbers which divide by self positive integer
// can you sqrt to decrease the process time

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

console.log(isPrime(4));
console.log(isPrime(5));

//? Big-O O(sqrt n)
