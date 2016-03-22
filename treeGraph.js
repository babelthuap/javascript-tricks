'use strict';

const EMPTY_TREE = {
  height: () => 0,
  _find: () => false,
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

  }

  postOrder() {

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

let tree = new Tree(2);
    tree.left = new Tree(1);
    tree.right = new Tree(3);
console.log(tree.height());
console.log(tree.isBalanced());

console.log();

let searchTree = new BinarySearchTree(2);
    searchTree.left = new BinarySearchTree(1);
    searchTree.right = new BinarySearchTree(3);
console.log(searchTree.includes(1));
console.log(searchTree.includes(3));
console.log(searchTree.includes(0));
console.log(searchTree.includes(5));
























