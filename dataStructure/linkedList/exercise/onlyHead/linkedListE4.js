/*
! What is linked list
1.	 	is a linear data structure similar with array and all nodes are connected
2.		a node contain two items : a value and a reference to the next node
3.		the first node is called head
4.		last node always has null reference

*/

/*
! Advantages and Disadvantages

? Adv: can insert or remove more easy ,time complexity is linear


? Dis: For search is a little bit bad, because that consume more memory

*/

/*
! Three types of linked list:

? 	-	 	singly 		- contain only one pointer to the next node
?		-		doubly 		- contains two pointer, pointer for the next one and one for the previous
?		-		circular 	-	is a variation of a linked list in which the last node points to the first node are any other node before it,
?										- thereby forming a loop
*/

/*
! Linked list usage

? 	Stack and queue are applications of linked list data structure
?   Image viewer

*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }

    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  // search

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    if (this.head.value === value) {
      return 0;
    } else {
      let i = 0;
      let curr = this.head;

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
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      return console.log("The list is empty");
    } else {
      let prev = this.head;
      let arrayStr = "";
      while (prev) {
        arrayStr += `${prev.value} `;
        prev = prev.next;
      }
      console.log(arrayStr);
    }
  }
}

const linkedList = new LinkedList();

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.append(40);
linkedList.append(50);
linkedList.insert(21, 2);
// linkedList.removeFrom(4);
// linkedList.removeValue(30);

// console.log(linkedList);
linkedList.print();
console.log(linkedList.search(30));
// linkedList.reverse();
// linkedList.print();
