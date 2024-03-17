/*
! 	Linked list

?		1. 	A linked list is a linear data structure that includes a series of connected nodes
?		2. 	the nodes contain two items: the data stored and a link to the next node
?		3. 	the entry point to a linked list is called the head and is a reference to the first node in the linked list.
?		4. 	The last node on the list points to null.
?		5.	if the list is empty, the head is a null reference
?		6.	Each node consists of a data value and a pointer that points to the next node.

! 	Benefit of linked list over than convention array

?		The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure. 


! 	Disadvantages of linked list:
? 	Random access of elements is not feasible and accessing an element has linear time complexity
? 	It uses more memory than the arrays because of the storage of the pointers

*/

/*

! 	There are three types of Linked Lists: 

? 	-	Singly linked list -	each node contains only one pointer to the next node
?		-	Doubly Linked list - 	each node contains two pointers, a pointer to the next one and a pointer to the previous node.
?		-	Circular Linked list -	is a variation of a linked list in which the last node points to the first node are any other node before it,
?		thereby forming a loop

*/

/*

! 	The linked list data structure supports three main operations:

?		- prepend 	-	add an element at the head of the list
?		- append 		- ad an element to the tail of the list
?		-	Insertion - to add an element at the beginning, end or at a given index in the list
?		-	Deletion 	- to remove an item given its index or value.
?		-	Search 		- to find an element given its value
?	 	- reverse 	- reverse list

*/

/*

! 	Linked list usage

?		-	All applications of both stacks and queues are applications of linked lists
?		- Image viewer
*/

//! Implementation

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

  getSize() {
    return this.size;
  }
  //add a node to the head
  //? O(1)
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

  // insert a value at the index
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
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

  // remove by index
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head - this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  // remove by value
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
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }
  // add a node to the tail
  //? O(n)
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
  //search by value
  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let prev = this.head;

    while (prev) {
      if (prev.value === value) {
        return i;
      }
      prev = prev.next;
      i++;
    }

    return -1;
  }

  //linked list reverse
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

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const linkedList = new LinkedList();
linkedList.prepend(10);
linkedList.prepend(20);
linkedList.append(30);
linkedList.append(40);
linkedList.insert(50, 1);
console.log(linkedList);
linkedList.print();

console.log(linkedList.search(30));
linkedList.reverse();
linkedList.print();
