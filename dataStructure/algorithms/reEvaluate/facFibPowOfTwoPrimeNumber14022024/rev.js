// 1. factorial number
// 2. fibonacci sequence
// 3. power of two
// 4. prime number

//! Factorial number

//* idea
/* 
is the product of all numbers
0! = 1

ex: 5!

5!= 5*4*3*2*1		5!= 5*4!
4!= 4*3*2*1			4!= 4*3!
3!= 3*2*1				3!= 3*2!
2!= 2*1					2!= 2*1!
1!= 1						1!= 1*0!
0!= 1

?formula
! n!=n*(n-1)!

*/

function factorial(n) {
  //to do
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(5));

//! time complexity, Big-O - O(n) - Linear

//! =================================================================================

//! fibonacci number

//* idea
/*
sum of latest 2 numbers
starts with 0,1

!formula 
? fib number = fib(last number) + fib(last number -1)
*/

function fibonacci(n) {
  //to do
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}
// console.log(fibonacci(0));
// console.log(fibonacci(2));
// console.log(fibonacci(5));

//! time complexity, Big-O - O(n)

//! =================================================================================

//! power of two

//* idea
/*
calculate the binary of that number  and use & 

5

5/2 = 2		1
2/2 = 1   0
1/2 = 1		1

5-1 = 4
4/2 = 2 	0
2/2 = 1 	0
1/2 = 1		1

&

101
100
===
1 === 0? false

*/

function powerOfTwo(n) {
  //to do
  if (n < 0) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

// console.log(powerOfTwo(4));
// console.log(powerOfTwo(5));
//! time complexity, Big-O - O(1) - constant

//! =================================================================================

//! prime number

//* idea

/* 
check if it is positive number
check if the number divided exactly
*/
function isPrime(n) {
  //to do
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}

console.log(isPrime(4));
console.log(isPrime(5));

//! time complexity, Big-O - O(sqrt n)
