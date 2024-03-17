//! An integer is a power of two if there exists an integer "x" suck that "n" ===2^x

//? isPowerOfTwo(1) = true (2^0)
//? isPowerOfTwo(2) = true (2^1)
//? isPowerOfTwo(4) = false

//! first way

function powOfTwo(n) {
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

// console.log(powOfTwo(1));
// console.log(powOfTwo(2));
// console.log(powOfTwo(4));
// console.log(powOfTwo(5));

//! time complexity, Big-O - O(log n)

//! --------------------------------------------------------

//! Bitwise Power of two
//? 1 -> 1
//? 2 -> 10
//? 3 -> 100
//? 4 -> 1000

//* 1 - 0001			2 -	0010			3 - 0100			4 - 1000
//* 0 - 0000			1 -	0001			2 - 0010			3 - 0100
//* --------			---------			--------			--------
//* 0 - 0000			0 - 0000			0 - 0000			0 - 0000

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(4));
console.log(isPowerOfTwoBitWise(5));
