'use strict';

class Stack {
  constructor() {
    this.clear();
  }

  clear() {
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
    this.size = 0;
  }

  push(value) {
    ++this.size;
    let topStack = this.stackSet.peek();
    if (!topStack || topStack.height === this.maxHeight) {
      let newTop = new Stack();
      newTop.push(value);
      this.stackSet.push(newTop);
    } else {
      topStack.push(value);
    }
  }

  pop() {
    let topStack = this.stackSet.peek();
    if (!topStack) {
      return undefined;
    }
    if (topStack.height === 0) {
      this.stackSet.pop();
      return this.pop();
    } else {
      --this.size;
      return topStack.pop();
    }
  }

  peek() {
    let topStack = this.stackSet.peek();
    if (!topStack) {
      return undefined;
    }
    if (topStack.height === 0) {
      this.stackSet.pop();
      return this.peek();
    } else {
      return topStack.peek();
    }
  }
}


class Queue {
  constructor() {
    this.clear();
  }

  clear() {
    this.in = null;
    this.out = null;
  }

  enqueue(value) {
    let newNode = {
      value: value,
      next: null,
    };

    if (this.in && this.out) {
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


// implement a queue using two stacks
class MyQueue {
  constructor() {
    this.clear();
  }

  clear() {
    this.newest = new Stack();
    this.oldest = new Stack();
  }

  enqueue(value) {
    this.newest.push(value);
  }

  _accessOldest(action) { // action is 'pop' or 'peek'
    if (this.oldest.height) {
      return this.oldest[action]();
    } else {
      while (this.newest.height) {
        this.oldest.push( this.newest.pop() );
      }
      return this.oldest[action]();
    }
  }

  dequeue() {
    return this._accessOldest('pop');
  }

  peek() {
    return this._accessOldest('peek');
  }
}


module.exports = {
  Stack: Stack,
  Queue: Queue,
};


// TEST

console.log('Regular stack:');
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('pop:', stack.pop());
console.log('pop:', stack.pop());
console.log('pop:', stack.pop());
console.log('pop:', stack.pop());

console.log();

console.log('MinStack');
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

console.log('Set of stacks:');
let sos = new SetOfStacks(2);
console.log('peek:', sos.peek());
console.log('pushing 0, 1, 2, 3, 4');
sos.push(0); sos.push(1); sos.push(2); sos.push(3); sos.push(4);
console.log('peek:', sos.peek());
console.log('size:', sos.size);
console.log('pop:', sos.pop());
console.log('pop:', sos.pop());
console.log('size:', sos.size);
console.log('pop:', sos.pop());
console.log('pop:', sos.pop());
console.log('size:', sos.size);
console.log('peek:', sos.peek());

console.log();

console.log('Queue:');
let queue = new Queue();
queue.enqueue(1); queue.enqueue(2); queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(4); queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log();

console.log('MyQueue:');
let myQueue = new MyQueue();
myQueue.enqueue(1); myQueue.enqueue(2); myQueue.enqueue(3);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.enqueue(4); myQueue.enqueue(5);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
