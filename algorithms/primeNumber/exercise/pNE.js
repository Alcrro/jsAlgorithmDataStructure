function primeNumber(n) {
  //to do
  if (n < 1) {
    return false;
  }

  for (let i = 1; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
}

// console.log(primeNumber(3));
// console.log(primeNumber(4));
// console.log(primeNumber(12));
// console.log(primeNumber(13));

//! batter way

function primeNumBatWay(n) {
  //to do
  if (n < 1) {
    return false;
  }
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumBatWay(3));
console.log(primeNumBatWay(4));
console.log(primeNumBatWay(12));
console.log(primeNumBatWay(13));
