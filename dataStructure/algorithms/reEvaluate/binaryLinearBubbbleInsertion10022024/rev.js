// 1. binary search
// 2. linear search
// 3. bubble sort
// 4. insertion sort

//! Binary search

//* pseudocode
// 1. check if the array is sorted
// 2. hold the first and the last index
// 3. find the middle index
// 4. check the middle element if is equal with the target
// 5. if true; return the middle index
// 6. if false; check if the target is less than the array of middle index
// 7. return rightIndex = middleIndex - 1
// 8. return leftIndex = middleIndex + 1
// 9. else return -1

function binary(array, target) {
  //to do
  // check if is sorted

  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swapped = true;
        return false;
      }
    }
  } while (swapped);

  let leftIndex = 0;
  let rightIndex = array.length;

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

// console.log(binary([-12, -5, 3, 8, 15, 20], 20));
//!===========================================================

//! Bubble sort

//* pseudocode

// compare first element with second element and so on
// check if the first element is > second element
// if is true, hold the el on a variable tempo
// switch elements

function bubble(array) {
  //to do

  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      // console.log(array[i + 1]);
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const array = [23, -21, -32, 4, -4, 12, 22];
// bubble(array);
// console.log(array);

//!===========================================================

//! Linear search

//* pseudocode

// go through each element of array.
function linear(array, target) {
  //to do
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

// console.log(linear([23, -21, -32, 4, -4, 12, 22], 22));

//!===========================================================

//! insertion sort

//* pseudocode
// split virtually the array as sorted and unsorted array
// assume the first element is sorted
// grab on a temp variable the first element from unsorted array
// grab on a temp var the first index on a sorted array
// create a loop with condition the first element of sorted array is > than the element of unsorted array
// if is true : the unsorted element became in the sorted element
// decrement the index of the sorted element
// if is not: go towards to
// sorted element swipe to the right

function insertion(array) {
  //to do

  for (let i = 1; i < array.length - 1; i++) {
    //store a var the value of the first element unsorted
    let insertionNumber = array[i];
    // store on a  variable the index of sorted element
    let j = i - 1;
    // check if we have elements in sorted array
    // check if sorted element is > than unsorted element
    while (j >= 0 && array[j] > insertionNumber) {
      // the unsorted element become the first element
      array[j + 1] = array[j];
      // decrement the index of the sorted array
      j--;
    }
    //
    array[j + 1] = insertionNumber;
  }
}

const insertionArray = [23, -21, -32, 4, -4, 12, 22];
insertion(insertionArray);
console.log(insertionArray);
