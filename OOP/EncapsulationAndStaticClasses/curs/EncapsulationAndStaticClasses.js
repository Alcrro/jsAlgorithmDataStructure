/*

! Encapsulation and "static"

*/

class Database {
  #token = "abc123";
  constructor() {
    this.#token = "xyz789";
  }
  saveData(data) {
    this.#initDBConnection();
    this.#authorize();
    this.#updateQuery();
  }

  #initDBConnection() {}
  #authorize() {}
  #updateQuery() {}
}

const db = new Database();
// console.log(db);
// console.log(db.token);
// console.log(Object.getOwnPropertyNames(db));
// console.log(Object.getOwnPropertyNames(db.__proto__));

//! private with subclass

class CustomDB extends Database {
  #token = "random";
  constructor() {}
  saveData(data) {
    // super();
    // super.#initDBConnection() // error
  }
}

//! static keyword

class Utils {
  static description = "A utility library";
  static capitalize(str) {
    return str.toUpperCase();
  }
}

console.log(Utils.description);
console.log(Utils.capitalize("hi"));
