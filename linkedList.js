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

  nth(n) {
    if (n === 0) {
      return this.value;
    } else {
      return this.next ? this.next.nth(n - 1) : undefined;
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
list.removeDuplicates()
console.log('no duplicates:', list.toArray()); // -> [5,4,1,3,2]
console.log('0th:', list.nth(0));
console.log('4th:', list.nth(4));
console.log('5th:', list.nth(5));
