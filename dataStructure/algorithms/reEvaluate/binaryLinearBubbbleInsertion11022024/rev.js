// 1. bubble sort
// 2. insertion sort
// 3.	quick sort
// 4. binary search
// 5. linear search

//! Bubble sort

//* bubble sort idea
// 1. Compare adjacent elements in the array and swap to positions if they are not intended order
// 2. Repeat the instruction as you step through each element in the array
// 3. Once you step through the whole array with no swaps the array is sorted

// ex:
// [-6 20 8 -2 4] => check if -6 > 20 => false, remain in the same position
// [-6 20 8 -2 4] ->  [-6 8 20 -2 4] => // check if 20 > 8 => true, swap since 20 > 8
// [-6 8 20 -2 4] ->  [-6 8 -2 20 4] => // check if 20 > -2 => true, swap since 20 > -2
// [-6 8 -2 20 4] ->  [-6 8 -2 4 20] => // check if 20 > 4 => true, swap since 20 > 4
// End of the array.Elements swapped? Yes? Repeat the comparison
// [-6 8 -2 4 20]
// [-6 8 -2 4 20] ->[-6 -2 8 4 20] =>  // check if 8 > -2 => true, swap since 8 > -2
// [-6 -2 8 4 20] ->[-6 -2 4 8 20] =>  // check if 8 > -2 => true, swap since 8 > -2

function bubbleSort(array) {
  //to do
  let swapped;
  do {
    // become false at the start. to invoke the while loop when iteration still have elements to swap
    swapped = false;

    //iterate the array  from 0
    for (let i = 0; i < array.length - 1; i++) {
      // check if first element is > than the first
      if (array[i] > array[i + 1]) {
        // hold on a temp variable the first element
        let temp = array[i];
        // first element become second (swap)
        array[i] = array[i + 1];
        // second element become first (swap)
        array[i + 1] = temp;
        // become true when the statement is true; have element to swap and repeat
        // .. with while when the item is at the end of array
        swapped = true;
      }
    }
  } while (swapped);
}

// const bubbleArray = [-6, 20, 8, -2, 4];
// bubbleSort(bubbleArray);
// console.log(bubbleArray);

//? Big-O O(n^2) - quadratic

//! ================================================================

//! insertion sort

//* insertion sort idea

// 1.split virtually into 2 arrays; at the left sorted and right unsorted
// 2. assume the first number is already sorted
// 3. Select an unsorted element and compare with all elements in the sorted part
// 4. If the elements in the sorted part is smaller than the selected element,
// ... proceed to the next element in the unsorted part.Else, shift larger elements in the sorted part towards the right
// 5. Insert the selected element at the right index
// 6. Repeat till all the unsorted elements are placed in the right order

//*pseudocode
// iterate from index 1 the array
// hold on a temp var the value of second element of the array (first unsorted element)
// hold on a temp var the index of the first element
// check if first element > second
// if true : second element become first (no swap)
// temp index decrease by 1
// sorted element become the unsorted element(temp var)

function insertion(array) {
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
// const insertionArray = [-6, 20, 8, -2, 4];
// insertion(insertionArray);
// console.log(insertionArray);

//? Big-O O(n^2) - quadratic

//! ================================================================

//! Quick sort

//* idea
// chose a pivot as a guide
// in left the smallest number and the right the larger number compared with the pivot
// concat the arrays and pivot

// ex:
// [-6, 20, 8, -2, 4]

// we can chose as pivot:
// 1. first or last element
// 2. random element
// 3. median element

// i want last element

//x1
// [-6, 20, 8, -2, 4]
//left = [-2 -6]
//pivot = 4
//right = [8 20]

//x2
// [-2 -6]
//left = -2
// pivot = -6
// right =

//x2
// [8 20]
//left = 8
// pivot = 20
// right =

//concat left + pivot + right
// -2,6  4  8,20

function quickSort(array) {
  // to do
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const quickSortArray = [-6, 20, 8, -2, 4];
console.log(quickSort(quickSortArray));

//? worst case Big-O O(n^2)   - quadratic
//? avg case   Big-O O(log n) - logarithmic
