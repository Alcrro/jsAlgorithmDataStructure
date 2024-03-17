/*
! 	Stack

?		1.	Stack data structure is a sequence collection of elements that follows the principle LIFO.

?		2.	Stack is an abstract data type. It is defined by its behavior rather than being a mathematical model	

*/

/*
!	The Stack data structure supports two main operations

?		- Push, add element to the collection	
?   -	Pop, remove an element from the collection
*/

/*
! Stack Usage

? 		- Browser history tracking
? 		- Undo operation when typing
? 		- Expression conversions
? 		- Call stack in JS runtime
*/
//!================================================

//! Learn 1:

/*

! What is stack data structure?
? Stack data structure is a sequence collection of elements that follows the principle LIFO.It's an abstract data type.

*/

/*

! Stack data structure supports two main operations

? 	-	push, for add an element 
? 	-	pop, for remove an element

*/

/*
	Stack Usage

	Browser history tracking
	Undo operations when typing
	expression conversion
	call stack js runtime
*/

class Stack {
  constructor() {
    this.items = {};
    this.front = 0;
  }

  push(value) {
    this.items[this.front] = value;
    this.front++;
  }
  pop() {
    const item = this.items[this.front];

    delete this.items[this.front];
    this.front--;
    return item;
  }
  isEmpty() {
    return this.front === 0;
  }
  print() {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();
stack.pop();
console.log(stack.pop());
console.log(stack.pop());
stack.print();
