'use strict';

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    this.top = {
      value: value,
      next: this.top,
    };
  }

  pop() {
    if (!this.top) {
      return undefined;
    }
    let value = this.top.value;
    this.top = this.top.next;
    return value;
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
}


// TEST

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
