'use strict';

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

let tree = new Tree(4);
    tree.left = new Tree(2);
    tree.left.left = new Tree(1);
    tree.left.left.left = new Tree(0);
    tree.left.left.right = new Tree(1.5);
    tree.left.right = new Tree(3);
    tree.right = new Tree(6);
    tree.right.left = new Tree(5);
    tree.right.right = new Tree(7);
tree.print();

console.log();
console.log(tree.height());
console.log(tree.isBalanced());

console.log();

let searchTree = new BinarySearchTree(4);
searchTree.insert(2);
searchTree.insert(6);
searchTree.insert(1);
searchTree.insert(7);
searchTree.insert(3);
searchTree.insert(5);
searchTree.insert(3.5);
searchTree.insert(2.5);

searchTree.print();

console.log();
console.log(searchTree.includes(3));
console.log(searchTree.includes(20));
