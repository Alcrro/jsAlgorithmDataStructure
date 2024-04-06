/*

product of all numbers

5! = 5*4*3*2*1		5!= 5*4!
4! = 4*3*2*1			4!= 4*3!
3! = 3*2*1				3!= 3*2!
2! = 2*1					2!= 2*1!
1! = 1						1!= 1*0!
0! = 1

? the pattern / formula is:

! n! = n* (n-1)!
*/

function factorialNumber(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    console.log(result);
    result *= i;
  }
  return result;
}

console.log(factorialNumber(5));
