/*

?		1.	Linear data structure similar to an array, thats includes a series of connected nodes
?		2.	each nodes contain two items: the data stored and a link to the next node
?		3.	the entry points to a linked list is called head and is a reference to the first node in the linked list
?		4.	The last node on the list points is null
?		5.	if the list is empty , the head is a null reference

/*

! Advantages and Disadvantages of linked list

! Advantage
? The list elements can be easily inserted or removed without reallocation or reorganization


! Disadvantages
? Random access of elements is not feasible and accessing an element has linear time complexity
? it uses more memory than the arrays because if the storage of the points  
/*

/*

! Three types of linked list:

? - Singly linked list
?	-	Doubly Linked list
? - Circular linked list

*/

/*

! usage

? All applications of both stacks and queues are applications of linked list
?	Image viewer

*/

/*

! Linked list data structure supports three main operations:

?		insertion
?		deletion
? 	search

*/

//the node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkL {
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

  insertion(value, index) {
    if (index < 0 || index > this.size) {
      return console.log("You can't add a node");
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

  print() {
    if (this.isEmpty()) {
      return console.log("This list is empty");
    } else {
      let curr = this.head;
      let listArr = "";

      while (curr) {
        listArr += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listArr);
    }
  }
}

const linked = new LinkL();
linked.prepend(10);
linked.prepend(20);
// console.log(linked);
linked.append(50);
linked.print();

linked.insertion(15, 1);
console.log(linked);
linked.print();
linked.removeFrom(2);
linked.print();
