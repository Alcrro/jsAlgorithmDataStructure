/*

1. Binary search
2. Linear search
3. Bubble sort
4. Insertion sort
5. Quick sort
6. Merge sort

*/

//! Binary search

//* idea
/*
check if is already sorted 

*/

function binarySearch() {
  //to do

  let leftIndex = 0;
  let rightIndex = newArray.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
    if (target === newArray[middleIndex]) {
      return middleIndex;
    }
    if (target > newArray[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([-6, -2, 4, 8, 20], -2));
//! avg case Big-O B(log n) - logarithmic

// console.log(binarySearch([-6, 8, 20, -2, 4], -2));
//! worst case  Big-O B(n^2) - quadratic

//! ====================================================

//! linear sort

//*

// check each element from array

function linearSearch() {
  for (let i = 0; i < newArray.length - 1; i++) {
    if (target === newArray[i]) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch());

//! ====================================================

//! bubble sort

//* idea

/*
check if the first elem is grater than second element
if is true move to the right until last
repeat that with each element from array
*/

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

// const array = [-6, 8, 20, -2, 4];
// bubbleSort(array);
// console.log(array);

//! ====================================================

//! insertion sort

//* id

/*
split virtually array into an sorted array and unsorted array
check each elements from unsorted array with all el elements from sorted array


*/
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let insertNumber = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > insertNumber) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = insertNumber;
  }
}

// const array = [-6, 8, 20, -2, 4];
// bubbleSort(array);
// console.log(array);

//? Big-O O(n^2)

//! ====================================================

//! quick sort

//* idea

/* 
1/	take a pivot (first,last,random,median) 
2.	move all elements less than the pivot to
 the left else and concat them at the end
*/

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

// const array = [-6, 8, 20, -2, 4];
// console.log(quickSort(array));

//? worst case - O(n^2) - quadratic
//? avg case - O(log n) - logarithmic

//! ====================================================

//! merge sort

//*

/*


*/

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
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

const array = [-6, 8, 20, -2, 4];
console.log(quickSort(array));
