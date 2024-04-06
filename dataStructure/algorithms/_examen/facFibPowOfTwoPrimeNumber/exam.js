// 1. fibonacci sequence
// 2. factorial number
// 3. power of two
// 4. prime number

//! fibonacci sequence

function fibN(n) {
  //to do
  //start with [0,1]
  // next number is a sum of latest 2 numbers

  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibN(8));
// console.log(fibN(13));

//! factorial number
function facN(n) {
  //to do
  // 1*2*3*4 =fac(4)
  // 0! = 1
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(facN(3));
// console.log(facN(5));

//! power of two - first way

function isPowOfTwo(n) {
  //to do
  // n>2
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % i !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// console.log(isPowOfTwo(3));
// console.log(isPowOfTwo(4));
// console.log(isPowOfTwo(7));

//! power of two - batter way

function isBitWisePowOfTwo(n) {
  //to do
  // n>1
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

// console.log(isBitWisePowOfTwo(3));
// console.log(isBitWisePowOfTwo(4));
// console.log(isBitWisePowOfTwo(7));

//! prime number - first way

function isPrimeNumber(n) {
  //to do
  // n>2
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(4));
console.log(isPrimeNumber(5));

//! prime number - batter way

function isBPrimeNumber(n) {
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

console.log(isBPrimeNumber(4));
console.log(isBPrimeNumber(5));
