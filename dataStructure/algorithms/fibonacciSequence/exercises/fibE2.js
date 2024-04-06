/*

sum of all number 

fibonacci number starts with 0 and 1

? formula 
! 	n = (n-1) + (n-2)
*/

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(7));
