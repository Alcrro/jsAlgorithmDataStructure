/*
!  	Set
?		1. 	Is a data structure that can hold a collection of values.The values however must be unique
?		2.	Set can contain a mix of different data type. You can store strings, booleans,numbers or even objects all in the same set
? 	3.	Sets are dynamically sized. You don't have to declare the size of a set before creating it
?		4.	Sets do not maintain an insertion order
?		5.	Sets are iterables. They can be used with a for of loop
*/

/*
! 	Set vs Array

? 	1. Array can contain duplicate values whereas Set cannot
? 	2. Insertion order is maintained in arrays but it is not the case with sets
? 	3. Searching and deleting an element in the set is faster compared to arrays 

*/

//? crate new set
const set = new Set([1, 2, 3]);

//? to add new value to the set
//? add()
set.add(4);

// for (const item of set) {
//   console.log(item);
// }

//? try to add same value; the set will ignore duplicate values
set.add(4);

//? check if the value exist in set with has
console.log(set.has(4));

//? try to remove value
set.delete(3);

//check numbers of items on the set
console.log(set.size);

//clear numbers of the set
set.clear();

for (const item of set) {
  console.log(item);
}
