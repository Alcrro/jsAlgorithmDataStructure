/*
! Array:
?	1.	Is a data structure that can hold a collection of values.
?	2.	Can contain a mix of different data types.You can store strings,booleans
? 			numbers or even objects all in the same array.
? 3.	Arrays are resizable.You don't have to declare the size of an array before creating it.
? 4.	JS arrays are zero-indexed and the insertion order is maintained ( from 0 to array.length-1)
? 5. 	Is iterables. They can be used with a for loop 

*/

const array = [1, 2, 3, "alex"];
//? to access an element from array

console.log(array[2]);

//? to add an element at the end of array we use
//! push()

array.push(4);

//? to add an element at the beginning of array we use
//! unshift()

array.unshift(0);

//? to remove an element at the end of array we use
//! pop()

array.pop();

//? to remove an element at the beginning of array we use
//! shift()

array.shift();

for (const item of array) {
  console.log(item);
}

//methods : map, filter, reduce, concat, slice, splice

//! Time complexity

//? insert / remove from end - O(1)
//? insert / remove from beginning - O(n)
//? Access O(1)
//? Search O(n)
//? push/pop O(1)
//? shift/ unshift/ concat/ slice/ splice O(n)
//? forEach/ map/ filter/ reduce O(n)
