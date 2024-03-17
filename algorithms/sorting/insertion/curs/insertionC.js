//Insertion sort idea

// 1. Virtually split the array into a sorted and an unsorted part
// 2. Assume that the first element is already sorted and remaining elements are unsorted
// 3. Select an unsorted element and compare with all elements in the sorted part
// 4. In the elements in the sorted part is smaller than the selected element, proceed to the next
//  ..element in the unsorted part.Else, shift larger elements in the sorted part towards the right.
// 5. Insert the selected element at the right index
// 6. Repeat till al the unsorted elements are placed in the right order

function insertion(array) {
  //to do
  //we assume the first element is sorted and iterate to unsorted part of the array
  for (let i = 1; i < array.length; i++) {
    // hold the value of the second element into a temp variable
    let tempNumber = array[i];

    // sorted element, hold the first index of the array
    let j = i - 1;
    while (j >= 0 && array[j] > tempNumber) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = tempNumber;
  }
}

const array = [-6, 20, 8, -2, 4];
insertion(array);
console.log(array);

//? Big-O O(n^2) - quadratic
