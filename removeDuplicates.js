'use strict';

class List {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  removeDuplicates(previous, allValues) {
    if (!allValues) {
      allValues = new Set();
    }

    if (allValues.has(this.value)) {
      previous.next = this.next;
    } else {
      allValues.add(this.value);
      previous = this;
    }

    if (this.next) {
      this.next.removeDuplicates(previous, allValues);
    }
  }

  sort(comparator) {
    let sorted = List.fromArray(this.toArray().sort(comparator));
    this.value = sorted.value;
    this.next = sorted.next;
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
let list = List.fromArray([5,4,4,1,3,5,4,2,4]);
console.log('removed:', list.removeDuplicates()); // -> [5,4,1,3,2]