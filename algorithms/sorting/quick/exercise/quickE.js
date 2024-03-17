//* quick sort idea

// can take a pivot as :
// first element
// last element (our approach)
// random element
// median element

// we divide into smaller arrays
// left elements less than the pivot
// right elements grater than the pivot
// concatenate left array ,pivot and right array

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
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const quickArray = [8, 20, -2, 4, -6];
console.log(quickSort(quickArray));
