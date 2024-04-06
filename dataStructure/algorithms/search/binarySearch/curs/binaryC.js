//! Problem:
//! Give a sorted array of "n" elements and a target element "t", find the index of "t" in the array.
//! Return -1 if the target element is not found

//* pseudocode
// Check if the array is sorted (need to be sorted)
// find first element and last element
// make that array in a half

function binary(array, target) {
  //to do

  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }

    if (target < array[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binary([-5, 2, 4, 6, 10], 6));
// console.log(binarySearch([-6, -2, 4, 8, 20], -2));
//! avg case Big-O B(log n) - logarithmic

// console.log(binarySearch([-6, 8, 20, -2, 4], -2));
//! worst case  Big-O B(n^2) - quadratic
