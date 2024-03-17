function fibN(n) {
  //to do
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibN(2));
console.log(fibN(5));
console.log(fibN(12));
