//* bubble sort idea

// took an element and compare with each element from array
// at the end or array replay that for each element

function bubbleSort(array) {
  //to do
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);
}
const array = [22, -2, 52, -14, -10, 5, 32, 13];
bubbleSort(array);
console.log(array);
