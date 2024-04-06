// 1. Binary search
// 2. linear search
// 3. bubble sort
// 4. insertion sort
// 5. quick sort

//! Binary search

/* 
//* idea
1. the array need to be sorted ,check if it is 
2. if target is < than array value, move to the right else move to the left 
*/

function binarySearch(array, target) {
  //to do

  //bubble sort
  let swapped;
  let newArray = [];

  function quickSort(array) {
    if (array.length < 2) {
      return array;
    }
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

    return (newArray = [...quickSort(leftArray), pivot, ...quickSort(rightArray)]);
  }

  quickSort(array);

  console.log(newArray);

  let leftIndex = 0;
  let rightIndex = newArray.length;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    console.log(newArray[middleIndex]);
    if (target === newArray[middleIndex]) {
      return middleIndex;
    }
    if (target < newArray[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

// console.log(binarySearch([-6, -2, 4, 8, 20], -2));
console.log(binarySearch([-6, 20, 8, -2, 4], -2));
