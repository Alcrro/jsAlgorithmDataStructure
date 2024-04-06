function binarySearch(array, target) {
  //to do

  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    // console.log(middle);
    if (target === array[middle]) {
      return middle;
    }
    if (target < array[middle]) {
      array.indexOf((right = middle - 1));
    } else {
      array.indexOf((left = middle + 1));
      // return array.indexOf(right);
    }
  }
}

console.log(binarySearch([-12, -5, 2, 11, 16, 23], 16));
