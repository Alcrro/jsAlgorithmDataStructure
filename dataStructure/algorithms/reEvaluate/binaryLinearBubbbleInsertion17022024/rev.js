/*

1.	binary search
2.	linear search

2.	bubble sort
3. 	insertion sort
4.	quick sort
5.	merge sort

*/
//!==============================================================================================

//! binary search

//*idea

/*

1.	The array need to be sorted, for better time complexity
2.	Split the array in sub array
3.	check if the middle element is what we need, if Not move one
4.	check if target is less than the middle element if it is :
		right index move back
	else
		left index move forward
5.	return -1
*/

function binarySearch(array, target) {
  //to do

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middleIndex = Math.floor((left + (right - left)) / 2);
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

// console.log(binarySearch([-6, -2, 4, 8, 20], -2));
//? avg case Big-O B(log n) - logarithmic

// console.log(binarySearch([-6, 8, 20, -2, 4], -2));
//? worst case  Big-O B(n^2) - quadratic

//!=============================================================================================

//! linear search

//* idea

/*
1. the target	move on each element from an array and compare with each elements
*/

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) {
      return i;
    }
  }
  return -1;
}
// console.log(linearSearch([-4, 8, -6, 3, -12, 10], -12));

//? Big-O O(n) - linear

//!=============================================================================================

//! bubble sort

//* idea
/*
1.	Compare initial element with all elements from the array until the initial element is less than element from element	
2.	Repeat the process with next element until the array is sorted
*/

function bubbleSort(array) {
  //to do
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > [array[i + 1]]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
}

// const bubbleArray = [-4, 8, -6, 3, -12, 10];
// bubbleSort(bubbleArray);
// console.log(bubbleArray);

//? Big-O O(n^2) - quadratic

//!=============================================================================================

//! insertion sort

//* idea
/**
1.	split virtually the array into 2 arrays, one sorted and second unsorted
2.	check if the elements from sorted array less than the elements from unsorted array

*/

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const insertionNumber = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > insertionNumber) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = insertionNumber;
  }
}

// const insertionArray = [-4, 8, -6, 3, -12, 10];
// insertionSort(insertionArray);
// console.log(insertionArray);

//? Big-O O(n^2) - quadratic

//!=============================================================================================

//! quick sort

//* idea

/*
1.	find a pivot (first,last,random,median element) 
2.	push to the left elements less than the pivot and to the right elements grater than pivot and concat left array,pivot and right array
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
    if (pivot > array[i]) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }
  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

// const quickArray = [-4, 8, -6, 3, -12, 10];
// console.log(quickSort(quickArray));
// console.log(quickArray);
//? worst case - O(n^2) - quadratic
//? avg case - O(log n) - logarithmic

//! ====================================================

//! merge sort

//* idea

/*

1. split the array into sub arrays until the arrays contain only one element, that mean each element is sorted
2. compare the first element from the left array with first element from the right array and push to the right if is less

*/

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  let middle = Math.floor((array.length - 1) / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  //to do

  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }

  return [...sortedArray, ...leftArray, ...rightArray];
}
const mergeArray = [-4, 8, -6, 3, -12, 10];
console.log(quickSort(mergeArray));

//? avg case - O(log n) - logarithmic
