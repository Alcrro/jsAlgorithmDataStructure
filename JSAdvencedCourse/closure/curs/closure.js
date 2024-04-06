/*

! Closure 

?	Is a combination of a function bundled together with reference to its surrounding state.
?	Closures are created every time a function is create, at function creation time.

? In JS, when we return a function from another function we are effectively returning a combination of the function definition along
?		with  the function;s scope. This would let the function definition hav an associated persistent memory which could hold on the live data
? 	between executions.That combination of the function and its scope chain is what is called a closure in JS.   


*/

//! implementation

function outer() {
  let counter = 0;

  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const fn = outer();
fn();
fn();
