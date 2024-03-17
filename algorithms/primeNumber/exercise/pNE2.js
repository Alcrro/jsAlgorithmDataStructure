//! is a natural number grater than 1 ,what is not a product of two smaller numbers

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
