/*

! What is a queue?

? Queue data structure is a sequence collection of elements that follows FIFO principle
?	It's a abstract data type


*/

/*
! Queue data structure supports two main operations

?		-	enqueue - add an element to the rear/tail of collection
? 	- dequeue -	remove an element from front/head of collection

! could have:

?		-	peek - get a value from the collection without removing it 
?		- size - total numbers of elements from collection
?		-	isEmpty - check if is empty or not 
?		- print - show the elements 

*/

/*

! Queue usage 

?	-	Prints
? -	CPU scheduling
? -	Callback queue JS runtime

*/

//! implementation

class Queue {
  constructor() {
    this.item = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(element) {
    this.item[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.item[this.front];
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }
  print() {
    return console.log(this.item);
  }
}
