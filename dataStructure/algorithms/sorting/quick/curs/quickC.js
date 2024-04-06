//* Quick sort idea
//	1. Identify the pivot element in the array:
//	-	pick first element as pivot
//	-	pick last element as pivot (Our approach)
//	-	pick a random element as pivot
//	- pick a median as a pivot

//  2. Put everything that's smaller than the pivot into a "left" array and everything
// ...that's greater than the pivot into a "right" array.

//	3. Repeat the process for the individual "left" and "right" arrays till you have an array
// ... of length 1 which is sorted by definition

//  4. Repeatedly concatenate the left array, pivot and right array till one sorted array remains

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  //to do
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
const quickArray = [-6, 20, 8, -2, 4];

console.log(quickSort(quickArray));

//? worst case - O(n^2) - quadratic
//? avg case - O(log n) - logarithmic
