//*

/*

1. Check if the array is sorted : true move on ; else sort the array and next move on
2. find middle index, if the number is float floor the number
3. check target =  with middle element
4. check target less middle element, if true:
		right will be middle index -1
		else
		left will be middle index +1
*/

function binarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
    console.log(middleIndex);
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

console.log(binarySearch([-12, -4, 3, 5, 10, 15], 15));

// console.log(binarySearch([-6, -2, 4, 8, 20], -2));
//! avg case Big-O B(log n) - logarithmic

// console.log(binarySearch([-6, 8, 20, -2, 4], -2));
//! worst case  Big-O B(n^2) - quadratic
