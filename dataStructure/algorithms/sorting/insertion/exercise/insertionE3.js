function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > element) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = element;
  }
}
const array = [-6, 4, 20, -2, 8];

insertionSort(array);
console.log(array);
