function bubbleSort(array) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const array = [22, -2, 52, -14, -10, 5, 32, 13];
bubbleSort(array);
console.log(array);

//? Big-O O(n^2)
