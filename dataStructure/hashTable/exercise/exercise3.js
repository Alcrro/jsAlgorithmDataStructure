class HasTable {
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
      const sameKey = bucket.find((item) => item[0] === key);
      return sameKey[1];
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const hasKey = bucket.find((item) => item[0] === key);
      if (hasKey) {
        bucket.splice(bucket.indexOf(hasKey), 1);
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

const table = new HasTable(50);

table.set("name", "alex");
table.set("mane", "alex2");

table.display();
console.log(table.get("name"));
table.remove("mane");
table.display();
