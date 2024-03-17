/*
! 	Circular queue

?		1.	The size of the queue is fixed and single block of memory is used as if the first element is connected to the last element.
?		2.	Also referred to as circular buffer or ring buffer and follows the FIFO principle
? 	3.	A circular queue will reuse the empty block created during the dequeue operation
*/

/*

	Circular queue usage

		-	clock
		-	streaming data
		- traffic lights

*/

/*

! Circular queue operations

?		1.	enqueue - add an element to the rear/tail of the collection
?		2.	dequeue - remove an element to the front/head of the collection
?		3.	isFull  -	check if the circle is full
? 	4.	peek 		- get a value from the circle without removing it
?		5.	isEmpty -	check if is empty 
? 	6.	size    -	the numbers of the element inside the circle
?		7.	print 	- show us all items
*/

//! Implementation

class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.capacity = size;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
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
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  peek() {
    return this.items[this.front];
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    if (this.isEmpty()) {
      console.log(this.items);
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}
const circQueue = new CircularQueue(5);
console.log(circQueue.capacity);

circQueue.enqueue(10);
circQueue.enqueue(20);
circQueue.enqueue(30);

circQueue.print();

circQueue.dequeue();

circQueue.print();
circQueue.enqueue(40);
circQueue.enqueue(50);
circQueue.enqueue(60);
circQueue.print();
circQueue.enqueue(70);
circQueue.print();
