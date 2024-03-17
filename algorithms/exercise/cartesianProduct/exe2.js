//* idea
/*


Cartesian product of two sets A and B, denoted AxB. Is a set of all ordered pairs

ex:
const A = [1,2]
const B = [3,4]

AxB = [ [1,3][1,4][2,3][2,4] ]

*/

function cartesian(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      result.push([array1[i], array2[j]]);
    }
  }
  return result;
}
const A = [1, 2];
const B = [3, 4];
console.log(cartesian(A, B));

//?  array on the same length  Big-O = O(n^2) - quadratic

const C = [1, 2];
const D = [3, 4, 5];
//?  array on different length  Big-O = O(m*n)
