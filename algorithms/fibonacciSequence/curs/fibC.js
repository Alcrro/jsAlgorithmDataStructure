//! What is a fibonacci sequence?
//? In math fib seq is a sequence in which number is the sum of the two preceding ones
//? The first numbers in the seq are 0 and 1.
//? fibonacci(2) = [0,1]
//? fibonacci(3) = [0,1,1]
//? fibonacci(7) = [0,1,1,2,3,5,8]

//! Problem: Give a number "n", find the first "n" elements of the Fibonacci sequence

function fibonacci(n) {
  const first2El = [0, 1];

  for (let i = 2; i < n; i++) {
    first2El[i] = first2El[i - 1] + first2El[i - 2];
  }
  return first2El;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

//! time complexity, Big-O - O(n)
