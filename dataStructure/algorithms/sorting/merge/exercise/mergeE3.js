function mergeSort(array) {
  //to do
  if (array.length < 2) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);

  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  let sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray.shift());
    }
    sortedArray.push(rightArray.shift());
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

const array = [-6, 20, 8, -2, 4];
console.log(mergeSort(array));
