/*
Problem :
		Given two finite non-empty sets, find their Cartesian Product.

*/

//! Q: What is a Cartesian Product?
//?	A: In math, specifically set theory, the Cartesian product of two sets A and B
//? 		denoted AxB, is the set of all ordered pairs (a,b) where "a" is in A and "b" is in B

/*
 *	Cartesian product idea
 * Traverse each array and pair each element in the first array with each element in the second array
 */

/*
1.Ex:

	const A = [1,2]
	const B = [3,4]
	AxB = [ [1,3],[1,4],[2,3],[2,4] ]

2. Ex:

	const C = [1,2]
	const D = [3,4,5]
	CxD = [ [1,3],[1,4],[1,5],[2,3],[2,4],[2,5] ]
 */

function cartesianProduct(array1, array2) {
  //to do
  let result = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      result.push([array1[i], array2[j]]);
    }
  }

  return result;
}

const cartArray1 = [1, 2];
const cartArray2 = [3, 4, 5];

console.log(cartesianProduct(cartArray1, cartArray2));

//? on the same length: Big-O O(n^2) - quadratic
//? in my case array is not the same length : Big-O O(m*n)
