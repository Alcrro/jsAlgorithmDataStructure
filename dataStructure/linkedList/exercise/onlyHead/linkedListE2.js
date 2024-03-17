/*

! What is linked list

? 	1.	is a linear data structure similar to an array. thats includes a series of connected nodes
?		2. 	the nodes contain two items: the data stored and a link to the next node
?		3. 	the entry point to a linked list is called the head and is a reference to the first node in the linked list.
?		4. 	The last node on the list points is null.
?		5.	if the list is empty, the head is a null reference

*/

/*
! 	what we will implementing:

?	prepend -	add a node to the rear
?	append  - add a node to the last 
? isEmpty - check if is empty

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

  isEmpty() {
    return this.size === 0;
  }
}
const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);

console.log(list);
