/*

! 		Circular Queue

?			1. The size of the queue is fixed and a single block of memory is used as if the first element 
?					is connected to the last element.
?			2.	Also referred to as circular buffer or ring buffer and follows to FIFO principle
?			3.	A circular queue will refuse the empty block created during the dequeue operation.
?			4.	When working with queues of fixed maximum size, a circular queue is a great implementation choice

*/

/*
! 		The Circular Queue data structure supports two main operations

?			- Enqueue, which add an element to the rear/tail of the collection
?			-	Dequeue, which removes an element from the front/head of the collection
*/

/*

! 	Circular Queue Usage

		Clock 
		Streaming data
		Traffic lights

*/

//! Circular Queue Implementation

//?  	enqueue(element) 	- add an element to the queue
//? 	dequeue() 			 	- remove the oldest element from the queue
//?		isFull()				 	- check if the queue is full
//?		peek()						- get a value from the queue without removing it
//? 	isEmpty()					- check if the queue is empty
//?		size()						- get the number of elements in the queue
//? 	print()						- visualize the elements in the queue

//! code

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = 0;
    this.front = 0;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.items[this.rear] = element;
      this.currentLength++;
      this.rear = (this.rear + 1) % this.capacity;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;

    if (this.isEmpty()) {
      this.front = 0;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  print() {
    if (this.isEmpty()) {
      console.log(`Queue is empty`);
    } else {
      return console.log(this.items);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.isFull());
console.log(queue.print());
