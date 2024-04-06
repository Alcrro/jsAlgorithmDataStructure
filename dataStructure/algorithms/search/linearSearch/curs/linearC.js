//! Problem:
//! Give an array of "n" elements and a target element "t", find the index of "t" in the array.
//! Return -1 if the target element is not found

//* pseudocode
// Start at the first element in the array and  move towards the last
// At each element though, check if the element is equal to target element
// if element found, return the index of the element
// if element NOT found will return -1

function linear(array, target) {
  //to do
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linear([23, -4, 3, 12, -42, 32], 32));

//? Big-O - O(n) - linear
