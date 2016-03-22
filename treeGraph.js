'use strict';

const Stack = require('./stackQueue').Stack
    , Queue = require('./stackQueue').Queue;

const EMPTY_TREE = {
  _find: () => false,
  height: () => 0,
  isEmpty: true,
  print: () => undefined,
};

class Tree {
  constructor(value) {
    this.value = value;
    this.left = EMPTY_TREE;
    this.right = EMPTY_TREE;
  }

  height() {
    return 1 + Math.max(this.left.height(), this.right.height());
  }

  isBalanced() {
    return Math.abs(this.left.height() - this.right.height()) <= 1;
  }

  inOrder() {
    
  }

  preOrder() {
    let arr = [];
    let todo = new Stack();
    todo.push(this);

    let node;
    while (node = todo.pop()) {
      arr.push(node.value);
      !node.right.isEmpty && todo.push(node.right);
      !node.left.isEmpty  && todo.push(node.left);
    }

    return arr;
  }

  postOrder() {

  }

  print(prefix) {
    if (!prefix) {
      console.log(' ' + this.value);
      prefix = '';
    } else {
      console.log(prefix + '`' + this.value);
    }

    this.right.print(prefix + (this.left.isEmpty ? '  ' : ' |'));
    this.left.print(prefix + '  ');
  }
}


class BinarySearchTree extends Tree {
  constructor(value) {
    super(value);
  }

  _find(value) {
    if (value === this.value) {
      return this;

    } else if (value < this.value) {
      return this.left._find(value) || this;

    } else if (value > this.value) {
      return this.right._find(value) || this;
    }
  }

  includes(value) {
    return this._find(value).value === value;
  }

  insert(value) {
    let parent = this._find(value);
    // do nothing if the value already exists in the tree
    if (value < parent.value) {
      parent.left = new BinarySearchTree(value);
    } else if (value > parent.value) {
      parent.right = new BinarySearchTree(value);
    }
  }
}


// TEST

let tree = new BinarySearchTree(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(7);
tree.insert(3);
tree.insert(5);
tree.insert(3.5);
tree.insert(2.5);

tree.print();

console.log('\nin order:', tree.inOrder());


console.log('\nincludes(3):', tree.includes(3));
console.log('includes(20):', tree.includes(20));
console.log('height():', tree.height());
console.log('isBalanced():', tree.isBalanced());





