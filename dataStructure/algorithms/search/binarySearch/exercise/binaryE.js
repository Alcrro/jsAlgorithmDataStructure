//* pseudocode
// 1. check if the array is sorted
// 2. find first and last index
// 3. find the middle of the index, if the number is not integer round down with floor()
// 4. check if the middle of the index is what we need;
//		if it is, will return middle index,
//		if not, continue to search
// 5. check if the target is less then middle index ;
//	  if it is right index will go to the left, middle - 1
//		if is not left index will go to the right, middle + 1
// 6. if the target is not found in the array, will return -1

function binary(array, target) {
  //to do
  //check if is sorted

  let swapped;

  //find leftIndex
  let leftIndex = 0;

  //find rightIndex
  let rightIndex = array.length - 1;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        console.log(false);
        return false;
      }
    }
  } while (swapped);

  //check if left side is less or equal with right side

  while (leftIndex <= rightIndex) {
    //find the middle index
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    // check if the middle index is the target
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

console.log(binary([-12, -4, 3, 5, 10, 15], -4));
