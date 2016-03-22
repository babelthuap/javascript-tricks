'use strict';

class List {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  static fromArray(arr) {
    let tail;
    for (let i = arr.length - 1; i >= 0; --i) {
      tail = new List(arr[i], tail);
    }
    return tail;
  }

  *[Symbol.iterator]() {
    let finger = this;
    while (finger) {
      yield finger.value;
      finger = finger.next;
    }
  }

  toArray() {
    return [...this];
  }
}

// TEST
let list = List.fromArray([1,2,3,4,5]);
console.log(list.toArray());
