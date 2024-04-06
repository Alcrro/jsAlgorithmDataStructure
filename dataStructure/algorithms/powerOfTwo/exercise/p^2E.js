//! first way

function isPowOfTwo(n) {
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

// console.log(isPowOfTwo(3));
// console.log(isPowOfTwo(4));
// console.log(isPowOfTwo(5));

//! batter way

// 1 -> 1
// 2 -> 10
// 3 -> 100

function bitWisePowOfTwo(n) {
  //to do
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

console.log(bitWisePowOfTwo(3));
console.log(bitWisePowOfTwo(4));
console.log(bitWisePowOfTwo(5));
