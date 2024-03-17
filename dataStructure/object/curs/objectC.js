/*
! 	Object

?		1.	Object is an ordered collection of key-value pairs. The key must either be a string or a symbol  data type
?					where as the value can be of any data type.
?		2.	To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation 
?		3.	An object is not an iterable. You cannot use it with a for of loop.

*/

//? create a object
const obj = {
  name: "Alex",
  age: 25,
  "key-three": true,
};

console.log(obj);

//!===============================

//? to access the object
console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);

//!===============================

//? can add another properties of the same obj

obj.hobby = "gym";
console.log(obj);

//!===============================

//? delete a property of an object

delete obj.hobby;
console.log(obj);

//!===============================

//? add function as a value

obj.gym = function () {
  return "test";
};

console.log(obj.gym());

//!===============================

//? Object.keys() .values() .entries()

const newK = Object.keys(obj);
console.log(newK);

const newV = Object.values(obj);
console.log(newV);

const newE = Object.entries(obj);
console.log(newE);

//!===============================

//? time complexity

/*
?	insert - O(1)
?	Remove - O(1)
?	Access - O(1)
?	Search - O(n)
?	Object.keys - O(n)
?	Object.values - O(n)
?	Object.entries - O(n)

*/
