//! Q: 1. What is a Recursion?
//? A: Is a problem solving technique where the solution depends on solutions to smaller instance of the same problem
//? A: Recursion is when a function calls itself

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(6));

//? For iteration solution Big-O is O(n) -linear

//? for recursive solution:
// 																 F7
// 		 						F6 			 													F5
// 				F5  						F4 								F4 							F3
// 		F4  		F3 			F3 			F2				F3 			F2 			F2 			 F1

//? Big-O - O(2^n) - recursive
//! to determinate fib sequence with recursive is worst
//? batter way is with iteration
