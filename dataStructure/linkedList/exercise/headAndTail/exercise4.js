class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  }
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  insertFrom(value, index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (this.isEmpty()) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
      this.size++;
    }
  }
  removeFromValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head.value === value) {
      this.size--;
      return removeNode;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      let removeNode = prev.next;
      prev.next = removeNode.next;
      this.size--;
      return removeNode;
    }
  }
  removeFromIndex(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
      this.size--;
      return removeNode;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;

      this.size--;
      return removeNode.value;
    }
  }
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    if (this.head.value === value) {
      return 0;
    } else {
      let curr = this.head;
      let i = 0;
      while (curr) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return -1;
    }
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    if (this.isEmpty()) {
      return console.log("LIst is empty");
    } else {
      let prev = this.head;
      let array = [];
      while (prev) {
        array.push(prev.value);
        prev = prev.next;
      }
      console.log(array);
    }
  }
}
const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.append(30);
list.append(40);
list.append(50);
list.insertFrom(25, 2);
list.removeFromIndex(2);
list.removeFromValue(30);
console.log(list.search(40));
list.print();
list.reverse();
list.print();
// console.log(list);
