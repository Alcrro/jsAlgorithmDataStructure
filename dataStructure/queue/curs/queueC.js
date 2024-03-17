/*
! 		Queue
?		1.	The queue data structure is a sequential collection of elements that follows the principle of 
?				First in First Out (FIFO) 
?		2.	The first element inserted into the queue at the one end (rear/tail) and leave the queue from the other
?				end (front/head)
? 	3.	Queue is an abstract data type.It is defined by its behavior rather than being a mathematical model
*/

/*
!		The queue data structure supports two main operations
?		-	Enqueue, which adds an element to the rear/tail of the collection
?		-	Dequeue, which remove an element from the front/head of the collection

*/

/*
! 		Queue usage

		Printers
		CPU task scheduling
		Callback queue in JS runtime
*/

//! Queue Implementation

//? 	- enqueue(element)	- add an element to the queue
//? 	- dequeue() 				- remove the oldest element from the queue
//?		-	peek()						- get the value of the element at the front of the queue without removing it
//?		- isEmpty()					-	check if the queue is empty
//?		- size()						-	get the number of elements in the queue
//?		- print()						-	visualize the elements in the queue

//!========================================================

//! code - Big-O O(n) - linear

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

//!===================================

//! optimize the code - Big-O O(1) - constant

class QueueOptimized {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
    console.log(this.rear);
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
    console.log("rear " + this.rear);
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front--;

    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}
const queueOpt = new QueueOptimized();
console.log(queueOpt.isEmpty());

queueOpt.enqueue(10);
queueOpt.enqueue(20);
queueOpt.enqueue(30);

console.log(queueOpt.size());
queueOpt.print();
console.log(queueOpt.dequeue());
console.log(queueOpt.peek());
