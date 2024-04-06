/*

! Builder Design Patterns

? Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

*/

class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}
class UserB {
  constructor(name, { age, phone = "123456", address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}
const user = new UserB("Bob", { age: 10, address: new Address("1", "Main"), phone: "32311513" });
console.log(user);
// const user = new User("Bob", undefined, undefined, new Address("1", "Main"));
// console.log(user);
class User {
  constructor(name) {
    this.name = name;
  }
}

// class UserBuilder {
//   constructor(name) {
//     this.user = new User(name);
//   }

//   setAge(age) {
//     this.user.age = age;
//     return this;
//   }
//   setPhone(phone) {
//     this.user.phone = phone;
//     return this;
//   }
//   setAddress(address) {
//     this.user.address = address;
//     return this;
//   }

//   build() {
//     return this.user;
//   }
// }

// const user = new UserBuilder("Alex").setAge(20).setPhone("34545262624").build();

// console.log(user);
