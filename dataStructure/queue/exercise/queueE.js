class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    console.log(this.rear - this.front === 0);
    return this.rear - this.front === 0;
  }

  size() {
    return console.log(this.rear - this.front);
  }

  print() {
    return console.log(this.items);
  }
}

const queue = new Queue();
queue.isEmpty();

queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.print();
