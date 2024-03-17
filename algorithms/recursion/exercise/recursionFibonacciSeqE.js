// determinate fibonacci number with recursive solution

function recursiveFibonacci(n) {
  // stop calls itself
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));

//! the worst way to find  fibonacci number
