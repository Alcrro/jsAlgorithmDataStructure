function recBinarySearch(array, target) {
  //to do

  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (target === array[middleIndex]) {
    return middleIndex;
  }

  if (target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, rightIndex);
  }
}

console.log(recBinarySearch([-5, 2, 4, 6, 10], 6));

//? Big-O - O(log n)
