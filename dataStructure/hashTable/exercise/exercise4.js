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
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return undefined;
    } else {
      const findKey = bucket.find((item) => item[0] === key);
      if (findKey) {
        return findKey[1];
      } else {
        return undefined;
      }
    }
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const removeKey = bucket.find((item) => item[0] === key);
      if (removeKey) {
        bucket.splice(bucket.indexOf(removeKey), 1);
      }
    } else {
      return undefined;
    }
  }
  display() {
    for (const key in this.table) {
      console.log(key, [...this.table[key]]);
    }
  }
}

const hashTable = new HashTable(50);
hashTable.set("name", "alex");
hashTable.set("mane", "cristi");
hashTable.set("mnea", "cristi2");
console.log(hashTable.get("mane"));
hashTable.display();
hashTable.remove("mnea");
hashTable.display();
