function insertion(array) {
  //to do
  for (let i = 1; i < array.length; i++) {
    let insertNumber = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > insertNumber) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = insertNumber;
  }
}

const array = [-32, 22, 12, -10, -21, 5, -2, 3];
insertion(array);
console.log(array);
