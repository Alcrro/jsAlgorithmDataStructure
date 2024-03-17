/*

1. factorial number
2. fibonacci sequence
3. power of two 
4. prime number

*/

//! factorial number

/*
fact n is the product of all numbers
0! = 1

ex: 5!

5! = 5*4*3*2*1		5!= 5*4!
4! = 4*3*2*1			4!= 4*3!
3! = 3*2*1				3!= 3*2!
2! = 2*1					2!= 2*1!
1! = 1						1!= 1*0!
0! = 1

! formula  n! = n * (n-1)!

*/

function factorial(n) {
  //to do
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// console.log(factorial(0));
// console.log(factorial(5));

//!===========================================================

//! fibonacci sequence

//*idea

/*
1.	sum of latest 2 numbers
2.	first number in sequence are 0 and 1
*/

function fibonacci(n) {
  //to do
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibonacci(2));
// console.log(fibonacci(9));
//! time complexity, Big-O - O(n)

//!===========================================================

//! power of two

//*idea

/*
1.	An integer is power of two if there exists an integer "x" such that "n" === 2^x
2.	if all integers divided by 2 until 1 have remainder 0 , the number is power of two

ex: 3

3/2 = 1 remainder .5
1/2 = 0 reminder .5
3 is not power of two

ex : 4 

4/2= 2 rem 0
2/2= 1 rem 0
4 is power of two

*/

function powerOfTwo(n) {
  //to do
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// console.log(powerOfTwo(3));
// console.log(powerOfTwo(4));

//*idea

/*

bitwise operation
1. 	transform decimal number into binary 
2.	use & "and" to 

0 & 0 = 0
1 & 0 = 0
0 & 1 = 0
1 & 1 = 1
*/

function isPowerOfTwoBitWise(n) {
  //to do
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// console.log(isPowerOfTwoBitWise(3));
// console.log(isPowerOfTwoBitWise(4));

//!===========================================================

//! prime number

//*

/*
1.	grater than 1
2. is NOT a product of 2 smaller numbers

ex: 
isPrime(5) = true ( 1*5 or 5*1 )
isPrime(4) = false ( 1*5 or 2*2 or 5*1 )
*/

function isPrime(n) {
  // to do
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

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
