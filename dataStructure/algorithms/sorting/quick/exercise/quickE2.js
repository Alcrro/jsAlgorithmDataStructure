//* quick sort idea

// take an element
// split into 2 arrays ,left with smaller number and right array with biggest number than pivot
// repeat that until we have 1 element in the array
// concat left array the pivot number and right array

function quickSort(array) {
  //to do
  if (array.length < 2) {
    return array;
  }

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
  // console.log([...quickSort(left)]);
  // console.log(pivot);
  console.log([...quickSort(left), pivot]);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
const array = [-6, 20, 8, -2, 4];
console.log(quickSort(array));

//? worst case - O(n^2) - quadratic
//? avg case - O(log n) - logarithmic
