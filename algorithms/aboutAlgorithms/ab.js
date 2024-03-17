//! What is an algorithm?
//? A set of well-defined instructions to solve a particular problem

// inputs --> algorithm --> output
// add to numbers --> 1.add numbers using "+" 2. return the value --> sum of "a" and "b"

//! Why algorithms?
//? As a developer,you're going to come across problems that you need to solve
//? Learning algorithms translates to learning different techniques to efficiently solve those problems
//? One problem can be solved in many ways using different algorithms
//? Every algorithms comes with its own tradeoffs when it comes to performance

//! ALGORITHMS ANALYSIS
//? There are multiple ways to solve a problem
//? EX: There are multiple algorithms to sort a list of numbers

//! How to analyze which one of them is the most efficient algorithm?
//? Generally, when we talk about performance, we use an absolute measure
//? If i can run 100 meters in 12 sec, I'm faster than someone who takes 15 sec
//? The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors

//? -	Programming language used to implement the algorithm
//? -	The computer the program runs on
//? -	Other programs running at the same time
//? -	Quality of the operation system

//! We evaluate the performance of an algorithm in terms of its input size
//? = Time complexity = Amount of time taken by an algorithm to run, as a function of input size
//? - Space complexity -	Amount of memory taken by an algorithm to run, as a function of input size

//! How to represent complexity?
//? Asymptotic notation
//? - Mathematical tools to represent time and space complexity
//? - Big-O notation - Worst case complexity
//? - Omega notation - Best case complexity
//? - Theta notation - Average case complexity

//! ------------------------------------------------------------------------------------------------- !//

//! Big-O Notation

//! What is Big-o notation?
//? Notation to describes the complexity of an algorithm using algebraic terms

//! It has tw important characteristics:
//? - It is expressed in terms of the input
//? - It focuses on the bigger picture without getting caught up in the minute details

//! Time complexity :

//? n*n?2 -	O(1) - Constant
//? for loop x1 - O(n) - at list Linear can be other than that
//? for loop x2 - O(n^2) - Quadratic
//? for loop x3 - O(n^3) - Cubic
//? input size reduces by half every iteration - O(log n) - Logarithmic

//! Space complexity
//? O(1) 			- Constant 		- don't need extra memory or memory needed is not dependent of the input size
//? O(n) 			- Linear 			- extra space needed grows as the input size grows
//? O(log n)	- Logarithmic - extra space needed grows but not at the same rate as the input size
//! Quadratic time complexity and Quadratic space complexity is something you should try to avoid!!!!!!!!!!!!!!

//! ------------------------------------------------------------------------------------------------- !//

//! Objects - Big-O

//? -	insert - O(1)
//? - Remove - O(1)
//? - Access - O(1)
//* - Search - O(n)
//* - Object.keys() - O(n)
//* - Object.values() - O(n)

//! Arrays - Big-O

//? - insert/remove at end - O(1)
//* - insert/remove at beginning - O(n) -> index has to be reset for every remaining elements from the array
//? - access - O(1)
//* - Search - O(n)
//* - shift/unshift/concat/slice/splice - O(n)
//* - forEach/map/filter/reduce - (for loop)- O(n)
//! - when you are solving a problem and you use for loop and callback is also a for loop that is O(n^2) - Quadratic and for interviewer is not good
