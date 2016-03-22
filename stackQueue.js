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

// TEST
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
