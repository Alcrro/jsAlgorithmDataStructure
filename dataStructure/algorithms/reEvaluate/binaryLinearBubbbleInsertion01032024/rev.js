/*

! 1.	binary search
! 2.	linear search
! 3. 	bubble sort
! 4. 	insertion sort
! 5.	quick sort
! 6.	merge sort

*/

//! 1 binary search

function binarySearch(array, target) {
  //to do

  //check if array is sorted
  function bubbleSort(array) {
    let swapped;
    do {
      swapped = false;

      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
        }
      }
    } while (swapped);
  }
  bubbleSort(array);

  let left = 0;
  let right = array.length - 1;

  for (let i = 0; i < array.length - 1; i++) {
    const middleIndex = Math.floor(left + (right - left) / 2);
    if (target === array[middleIndex]) {
      return middleIndex;
    }
    if (target < array[middleIndex]) {
      right = middleIndex - 1;
    } else {
      left = middleIndex + 1;
    }
  }

  return -1;
}

// console.log(binarySearch([-6, 2, -8, -4, 20], 2));
//! worst big O  - O(n^2)
//! with sorted array O(log n)

//!=================================================

//! linear search

function linearSearch(array, target) {
  //to do
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([-6, -2, 4, 6, 10], 10));
//!  Big-O O(n) linear

//!=================================

//! insertion sort

/*
virtually split into 2 array first array assume is sorted and second unsorted
check each item from unsorted array with each items from sorted array 
if is true unsorted element become the next element from sorted array


*/

function insertion(array) {
  for (let i = 1; i < array.length; i++) {
    let insertionNumber = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > insertionNumber) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = insertionNumber;
  }
}
// const insertionArray = [-6, 10, 8, 4, -2];
// insertion(insertionArray);
// console.log(insertionArray);

//! O(n^2)

//!=================================

//! quick sort

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  let pivot = array[array.length - 1];
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (pivot > array[i]) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
// const quickArray = [-6, 10, 8, 4, -2];
// console.log(quickSort(quickArray));
//? worst case - O(n^2) - quadratic
//? avg case - O(log n) - logarithmic

//!====================================

//! merge sort

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let middleIndex = Math.floor(array.length / 2);

  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}
const mergeArray = [-6, 10, 8, 4, -2];
console.log(mergeSort(mergeArray));
