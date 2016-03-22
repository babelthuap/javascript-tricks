'use strict';

const EMPTY_TREE = {
  height: 0,
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
