/*

1.	Binary search
2.	Linear search
3.	bubble sort
4.	insertion sort
5.	Quick sort
6.	Merge sort

*/

//!==========================

//! Binary search

/*	

1. 	check if the array is sorted 
2.	hold on a variable first and last index
3.	find middle of the array  
4.	check if the middle of the element is equal with the target 
5.	 check if the target is less than middleIndex value
6.	true the rightIndex become middleIndex -1

*/

function binarySearch(array, target) {
  //to do

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middleIndex = Math.floor((left + right) / 2);
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

// console.log(binarySearch([-6, -2, 4, 6, 10], 6));
//? worst case Big-O O(n^2) quadratic
//? avg case Big-O O(log n) logarithmic

//!====================

//! linear search

/*
	1. 	take each element from the array and check if the element is equal with the target	
*/

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
// console.log(linearSearch([-6, -2, 4, 6, 10], 10));
//?  Big-O O(n) linear

//!====================

//! bubble sort

/*

	1.	 check first element if is grater than all elements from array
			repeatedly this with all elements

*/

function bubbleSort(array) {
  //to do
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

// const bubbleArray = [-6, 10, 8, 4, -2];
// bubbleSort(bubbleArray);
// console.log(bubbleArray);

//? Big-O O(n^2) - quadratic

//!=========================================================

//! insertion sort

/*

1.	split virtually array into 2 sub arrays
2.	assume the first element is sorted and second is unsorted
3.	check if the first element from the unsorted array is grater than the elements from the sorted array
4.	if it is true: unsorted element become first element from the sorted array
5.	decrement sorted index
6.	unsorted array become the element from sorted array and so one  

*/

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let insertionEl = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > insertionEl) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = insertionEl;
  }
}
// const insertionArray = [-6, 10, 8, 4, -2];
// bubbleSort(insertionArray);
// console.log(insertionArray);

//? Big-O O(n^2) - quadratic

//!=========================================================

//! quick sort

/*
1.	choose a pivot from (first,last,random,median ) index
2.	hold on variable less elements than pivot and grater than
3.	check if and push them to the correct array
*/

function quickSort(array) {
  //to do
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (pivot < array[i]) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// const quickArray = [-6, 10, 8, 4, -2];
// bubbleSort(quickArray);
// console.log(quickArray);
//? worst case - O(n^2) - quadratic
//? avg case - O(log n) - logarithmic

//!=========================================

//! merge sort

/*

1. 	divide the array until arrays have only 1 element, 1 element means is sorted
2. 	compare the first element from first array with first element from second array and so one 
3.	merge the array

*/

function mergeSort(array) {
  //to do
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
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
bubbleSort(mergeArray);
console.log(mergeArray);
