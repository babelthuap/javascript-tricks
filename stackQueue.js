'use strict';

class Stack {
  constructor() {
    this.top = null;
    this.height = 0;
  }

  push(value) {
    this.top = {
      value: value,
      next: this.top,
    };
    ++this.height;
  }

  pop() {
    if (!this.top) {
      return undefined;
    }
    let value = this.top.value;
    this.top = this.top.next;
    --this.height;
    return value;
  }

  peek() {
    return this.top ? this.top.value : undefined;
  }
}


class MinStack extends Stack {
  constructor() {
    super();
  }

  push(value) {
    let min = (this.top && this.top.min < value) ? this.top.min : value;
    this.top = {
      value: value,
      next: this.top,
      min: min,
    };
    ++this.height;
  }

  min() {
    if (this.top) {
      return this.top.min;
    }
  }
}


class SetOfStacks {
  constructor(maxHeight) {
    this.maxHeight = maxHeight;
    this.stackSet = new Stack();
  }
}


class Queue {
  constructor() {
    this.in = null;
    this.out = null;
  }

  enqueue(value) {
    let newNode = {
      value: value,
      next: null,
    };

    if (this.in) {
      this.in.next = newNode;
    } else {
      this.out = newNode;
    }

    this.in = newNode;
  }

  dequeue() {
    if (!this.out) {
      return undefined;
    }
    let value = this.out.value;
    this.out = this.out.next;
    return value;
  }

  peek() {
    return this.out ? this.out.value : undefined;
  }
}


module.exports = {
  Stack: Stack,
  Queue: Queue,
};


// TEST

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('pop:', stack.pop());
console.log('pop:', stack.pop());
console.log('pop:', stack.pop());
console.log('pop:', stack.pop());

console.log();

let minStack = new MinStack();
minStack.push(3);
minStack.push(4);
minStack.push(2);
minStack.push(5);
minStack.push(1);
console.log('min:', minStack.min());
console.log('pop:', minStack.pop());
console.log('min:', minStack.min());
console.log('pop:', minStack.pop());
console.log('min:', minStack.min());
console.log('pop:', minStack.pop());
console.log('min:', minStack.min());
console.log('pop:', minStack.pop());
console.log('min:', minStack.min());

console.log();

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
