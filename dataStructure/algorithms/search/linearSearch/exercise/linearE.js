//* pseudocode
// first element and go towards to the last
// if the target is found in the array return index of the target
// if not return -1

function linear(array, target) {
  //to do
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linear([-23, 21, -32, -12, 10, 3, 5, -1], -1));

//? Big-O O(n)  linear
