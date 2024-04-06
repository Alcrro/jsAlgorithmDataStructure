//* insertion sort idea

// split virtually in 2 array left sorted array, right unsorted array
// check the element from unsorted array with each elements from sorted array

//[ -6 4 20 -2 8 ]
//[ -6 ] [ 4 20 -2 8 ] => 4 >2? true. Shift to the left
//[ -6 4 ] [20 -2 8 ] => 4 >2? true. Shift to the left

function insertionSort(array) {
  // increment the unsorted array start wit index 1
  for (let i = 1; i < array.length; i++) {
    //hold in a variable/memory value of the first index to start
    let insertNumber = array[i];
    //hold in a variable/memory the index of the unsorted array - 1 to virtually split the array
    let j = i - 1;

    // check if elements are in the sorted elements
    // iterate the sorted array to check each elements inside
    while (j >= 0 && array[j] > insertNumber) {
      // move unsorted element to
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = insertNumber;
  }
}

const array = [-6, 4, 20, -2, 8];
insertionSort(array);
console.log(array);
//? Big-O O(n^2) - quadratic
