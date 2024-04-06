function factorialNumber(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorialNumber(0));
console.log(factorialNumber(4));
console.log(factorialNumber(5));
console.log(factorialNumber(8));
console.log(factorialNumber(11));

//! time complexity, Big-O - O(n) - Linear
