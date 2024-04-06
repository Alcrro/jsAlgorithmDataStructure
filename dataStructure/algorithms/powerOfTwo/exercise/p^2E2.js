/*

! An integer is power of two if there exists an integer "x" which "n"===2^x

isPowerOfTwo(2) = true (2^1)
isPowerOfTwo(4) = false

*/

/*
bit wise

& and

ex: 5 

5/2 = 2  	1
2/2 = 1		0
1/2 = 1	  1

n-1 

4/2 =2 0
2/2 =1 0
1/2 =1 1

101
100
===
100

*/

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
