//* idea

/*

check each element from array if it's equal with the target element

*/

function linearSearch(array, target) {
  console.log(array.length);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-23, 21, -32, -12, 10, 3, 5, -2], -2));

//? Big-O O(n)  linear
