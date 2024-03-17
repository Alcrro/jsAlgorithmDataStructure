/*
! 1. 	binary search
! 2.	linear search
! 3.	bubble sort
! 4.	insertion sort
! 5.	quick sort
! 6.	merge sort

*/

//! binary search

/*
 1. 	check if the array is sorted if not sorted , sort the array
 2. 	divide the array into half 
 3. 	check if the half value is what we need
			if is true return the index
			if false
4.	move to the left if the value is less and to the right when is grater and divide in the half again
*/

//! implementation

function binarySearch(array, target) {
  //to do
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
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

// console.log(binarySearch([-6, -2, 3, 8, 12, 21], 12));
//? worst  Big O O(n^2) quadratic
//? Big O O(log n) - logarithmic
//! linear search

/*
1. start to compare each elements with the target from 0 to the last item
*/

//!implementation

function linearSearch(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    if (target === array[i]) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([-6, 12, -2, 21, 3, 8], 12));
//? Big O O(n) - linear

//! bubble sort

/*
 check first element with all elements from the array
  if true : move the element 
	do that with each element from the array
 
*/

//! implementation

function bubbleSort(array) {
  //to do
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
}

// const array = [-6, 12, -2, 21, 3, 8];

// bubbleSort(array);
// console.log(array);

//? Big O O(n^2) quadratic

//! insertion sort

/*
 1. split virtually into 2 arrays first in sorted array and second in unsorted array
 2.	hold in temps variable the value of the first unsorted array and the index of the sorted array
 3.	check each element from unsorted array with all elements from sorted array
 4. if ele from uns is grater than the value from the sorted array element become the value from sorted array until is false


*/

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let element = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > element) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = element;
  }
}
// const array = [-6, 12, -2, 21, 3, 16, 8];

// insertionSort(array);
// console.log(array);
//? Big O O(n^2) quadratic

//! quick sort

/*

1.	take a pivot from the array ( last, first ,middle,random)
2.	compare are items with the pivot
3.	if the item is less than the pivot, push into left array and else 
4. 	concat the arrays + pivot 

*/

//! implementation

function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  //to do

  let pivot = array[array.length - 1];
  let leftArray = [];
  let rightArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
// const array = [-6, 12, -2, 21, 3, 16, 8];

// console.log(quickSort(array));
//? worst case - O(n^2) - quadratic
//? avg case - O(log n) - logarithmic

//! merge sort

/*

divide the array until is only one element in each array
check first  element from the first array with the first element from the second array

*/

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let middleIndex = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
  let sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}
const array = [-6, 12, -2, 21, 3, 16, 8];

console.log(mergeSort(array));
