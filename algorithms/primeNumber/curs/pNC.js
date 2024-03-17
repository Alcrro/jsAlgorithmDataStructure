//! Prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

//? isPrime(5) = true (1*5 or 5*1)
//? isPrime(4) = false  (1*5 or 2*2 or 5*1)

function primeNumber(n) {
  //to do
  if (n < 2) {
    return false;
  }
  //if n = 100, check if n is equal with 10
  //if n = 10000, check if n === 100
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeNumber(1));
console.log(primeNumber(4));
console.log(primeNumber(5));
console.log(primeNumber(7));
console.log(primeNumber(19));
console.log(primeNumber(27));

//! time complexity, Big-O - O(sqrt(n))
