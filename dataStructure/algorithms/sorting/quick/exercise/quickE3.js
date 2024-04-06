function quickSort(array) {
  //to do
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

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
const array = [-6, 20, 8, -2, 4];
console.log(quickSort(array));
