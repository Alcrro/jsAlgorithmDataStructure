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

const array = [20, -6, 4, -10, 18, -12];

bubbleSort(array);
console.log(array);
