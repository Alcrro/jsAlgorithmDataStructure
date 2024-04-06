function linearSearch(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-20, -12, -3, 1, 4, 10, 15], 10));
