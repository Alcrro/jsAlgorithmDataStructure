// 1. prime number
// 2. factorial number
// 3. fibonacci sequence
// 4. power of two

//! prime number

//* pseudocode
// grater than 2,
// check if is divide by 2
// sqrt of "n"
function isPrime(n) {
  //to do
  //check if n < 1
  if (n < 2) {
    return false;
  }

  //check if is divide exact
  if (Math.sqrt(n) % 2 === 0) {
    return false;
  }
  return true;
}

// console.log(isPrime(1));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(16));

//!=====================================================

//! factorial number

//* pseudocode

// 0! = 1
// let result = 1
// n > 1
// for let i = 1; i<n;i++
// result *= i
// return result

function factorial(n) {
  //to do
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(0));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(7));

//!=====================================================

//! Power of two

//* pseudocode
// binary representation
// & - and
// 0 & 0 = 0
// 1 & 0 = 0
// 0 & 1 = 0
// 1 & 1 = 1

// 4 & (4-1) === 0
// 4 & 3 === 0

// 4 in binary
// 4/2 = 2			0
// 2/2 = 1			0
// 1/2 = 0			1

// 3 in binary
// 3/2 = 1			1
// 1/2 = 0			1

// 100
//  11
//====
// 100

// rep in binary number 33
// 33/2 = 16.  	1
// 16/2 = 8  		0
// 8/2  = 4 		0
// 4/2  = 1    	0
// 2/2  = 1    	0
// 1/2  = 0     1

//the binary number is : 100001

function isPowerOfTwo(n) {
  //to do
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// console.log(isPowerOfTwo(4));

//!=====================================================

//! fibonacci sequence

//* pseudocode
// is the sum of the latest 2 numbers
// fibonacci seq start with 0 and 1

function fibonacci(n) {
  //to do
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(15));
console.log(fibonacci(7));
