//* idea

/*

1. Split the array into sub arrays, until each array has one element(one element considered sorted)

2. Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining.That will be sorted array
*/

function mergeSort(array) {
  //stop recursive function
  if (array.length < 2) {
    return array;
  }
  //find middle of array
  const middle = Math.floor(array.length / 2);
  //split arrays into sub arrays
  const leftArray = array.slice(0, middle);
  const rightArray = array.slice(middle);

  // invoke recursive merge function
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  // hold on temp var the sorted elements
  let sortedElements = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedElements.push(leftArray.shift());
    } else {
      sortedElements.push(rightArray.shift());
    }
  }
  return [...sortedElements, ...leftArray, ...rightArray];
}

const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
console.log(mergeSort(array));
