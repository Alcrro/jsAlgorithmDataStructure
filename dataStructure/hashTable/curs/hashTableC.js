/*
! 			Hash Table

?		A hash table, also known as hash map, is a data structure that is used to store key-value pairs
?		Give a key,you can associate a value with that key for very fast lookup.
?		JS's Object is a special implementation of the hash table data structure.
?		However, Object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties


! 	Before we proceed tho learn hash table , we learn first about map
! 	Maps
? 	Maps which were introduced in 2015 allow you to store key-value pairs

! Writing your own hash table implementation is a very popular JS interview question

*/

/*
! Hash Table contd
? Hash tables store key values pairs

? Example:

?	1. "in" => "India"
?	2. "au" => "Australia"
?	3. "fr" => "France"
?	4. "it" => "Italy"

? We store the key value pairs in a fix sized array
? Arrays have a numeric index

 * How do we go from using a string as an index to number as an index?

? 	1.	A hashing function accepts the string key, converts it into a has code using a defined logic 
?  		and then maps it into a numeric index that is within the bounds of the array
? 	2.	Using the index, store the value

!		The same hashing function is reused to retrieve the value given a key

? 		-	Set to store a key-value pair
?			-	Get to  retrieve a value given its key
?			- Remove to delete a key value pair

*/

/*
! Hash table usage

?		-	Hash table are typically implemented where constant time lookup and insertion are required
?		-	Database indexing
? 	-	Caches

*/

/*
! implementation hashTable 
? This method has a bug, because if the hash() use "charCodeAt" to convert key to an index
? if the key has same sets of letters ex: "name" and "mane", will be the same
*/

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;

    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;

    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("name", "Alex");
table.set("age", "25");
table.display();

console.log(table.get("name"));

//! bug in code

table.set("mane", "Cristi");
table.set("name", "iana");
// table.remove("name");
table.display();
