/*

!  	Map

? 	1. 	Map is an unordered collection of key-value pairs.Both keys and values can be of any data type.
?		2.	To retrieve a value, you can use the corresponding key.
?		3.	Maps are iterables. They can be used with a for of loop.

*/

/*
! 			Object vs Map

? 	 1.	Objects are unordered whereas maps are ordered.
?		 2.	Keys in objects can only be string or symbol type whereas in maps, they can be of any type.
?		 3.	An object has a prototype and may contain a few default keys which may collide with your own
?				keys.If you're not careful.A map on the other hand does not contain any key by default.
?		 4. Objects are not iterables where as maps are iterables
?	   5. The number of items in an object must be determined manually where as it is readily available with 
?				the size property in a map.
?		 6. Apart from storing data,you can attach functionality to an object whereas maps are restricted to just storing data.

*/

//! to create a new map
//? new Map()

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

//! to add a new value
//? set() method

map.set("c", 3);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

//! check if the key exist in the map
//? has() method
console.log(map.has("a"));

//! to delete a value from map
//? delete() method
console.log(map.delete("c"));

//! check tha numbers of key values in the map
//? size
console.log(map.size);

//! to delete all values in the maps
//? clear() method
map.clear();
