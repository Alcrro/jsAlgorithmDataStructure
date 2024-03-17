function factorialNumber(n) {
  let result = 1;
  //to do
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialNumber(1));
console.log(factorialNumber(4));
console.log(factorialNumber(9));
