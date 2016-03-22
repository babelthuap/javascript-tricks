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

  nthFromLast(n) {
    let leftFinger = this;
    let rightFinger = this;
    let counter = 0;

    while (rightFinger.next) {
      rightFinger = rightFinger.next;
      ++counter;
      if (counter > n) {
        leftFinger = leftFinger.next;
      }
    }

    return counter >= n ? leftFinger.value : undefined;
  }

  nthFromLastRec(n, counter, leftFinger) {
    if (!counter) counter = 0;
    if (!leftFinger) leftFinger = this;

    if (counter > n) {
      leftFinger = leftFinger.next;
    }

    if (!this.next) {
      return counter >= n ? leftFinger.value : undefined;
    } else {
      return this.next.nthFromLastRec(n, counter + 1, leftFinger);
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


// add two numbers whose digits are given in reverse order by 2 lists
// e.g. (3 -> 1 -> 4) + (5 -> 9 -> 2)
// returns (8 -> 0 -> 7)
function add(listA, listB) {
  let sum = new List(0);
  let current = sum;

  while (listA || listB) {
    current.value = current.value + (listA ? listA.value : 0)
                                  + (listB ? listB.value : 0);
    let carry = Math.floor(current.value / 10);
    current.value %= 10;

    listA = listA && listA.next;
    listB = listB && listB.next;

    if (listA || listB || carry) {
      current.next = new List(carry);
      current = current.next;
    }
  }

  return sum;
}


// TEST
let list = List.fromArray([5,4,4,1,3,5,4,2,4]);

console.log('original:', list.toArray());
list.removeDuplicates()
console.log('no duplicates:', list.toArray()); // -> [5,4,1,3,2]

console.log('\n0th:', list.nth(0));
console.log('4th:', list.nth(4));
console.log('5th:', list.nth(5));

console.log('\n0th from last:', list.nthFromLast(0));
console.log('2th from last:', list.nthFromLast(2));
console.log('4th from last:', list.nthFromLast(4));
console.log('5th from last:', list.nthFromLast(5));

console.log('\n0th from last (recursive):', list.nthFromLastRec(0));
console.log('2th from last (recursive):', list.nthFromLastRec(2));
console.log('4th from last (recursive):', list.nthFromLastRec(4));
console.log('5th from last (recursive):', list.nthFromLastRec(5));

console.log('\nsums:');
let A = List.fromArray([3, 1, 4]);
let B = List.fromArray([5, 9, 2, 7]);
console.log(add(A, B).toArray()); // -> [8, 0, 7, 7]
let C = List.fromArray([7, 9]);
let D = List.fromArray([5]);
console.log(add(C, D).toArray()); // -> [2, 0, 1]
let E = List.fromArray([9, 9, 9, 9]);
let F = List.fromArray([9, 9, 9, 9]);
console.log(add(E, F).toArray()); // -> [8, 9, 9, 9, 1]
