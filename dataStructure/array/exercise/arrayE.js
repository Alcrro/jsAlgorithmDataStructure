const array = [1, 2, 3, false, "Alex", { name: "alex" }];

//?access array
console.log(array[5]);
//! Big-O O(1) - constant

//! ===============================================================

//! push / pop
//? add to the end of array
array.push(true);
//? remove to the end of array
array.pop();

//! Big-O O(1) - constant

//! ===============================================================

//! shift / unshift

//? add at the beginning array
array.unshift(0);

//? remove at the beginning array
array.shift();

//! Big-O O(n) - linear (index has to be reset for every remaining element)

//! ===============================================================

//! search / forEach/ reduce/ slice/ splice/ filter/ map/ concat

//! Big-O O(n) - linear

//! ===============================================================
