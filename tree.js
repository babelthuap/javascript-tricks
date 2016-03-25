'use strict';

const EMPTY_TREE = {
  _find: () => false,
  height: () => 0,
  isEmpty: true,
  print: () => undefined,
  traverse: () => [],
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

  traverse(order) {
    switch (order) {
      case 'in':
        return this.left.traverse('in')
               .concat(this.value)
               .concat(this.right.traverse('in'));
      case 'pre':
        return [this.value]
               .concat(this.left.traverse('pre'))
               .concat(this.right.traverse('pre'));
      case 'post':
        return this.left.traverse('post')
               .concat(this.right.traverse('post'))
               .concat(this.value);
      default:
        throw new Error("'traverse' must have an argument: 'in', 'pre', or 'post'");
    }
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

  // create a minimal-height binary search tree from an array of numbers
  static create(arr) {
    arr.sort((a, b) => a - b);
    return BinarySearchTree._create(arr);
  }

  static _create(arr) {
    if (arr.length === 0) {
      return EMPTY_TREE;
    }
    if (arr.length === 1) {
      return new BinarySearchTree(arr[0]);
    }
    let middle = Math.floor(arr.length / 2);
    let leftTree = BinarySearchTree._create(arr.slice(0, middle));
    let rightTree = BinarySearchTree._create(arr.slice(middle + 1));
    let mainTree = new BinarySearchTree(arr[middle]);
    mainTree.left = leftTree;
    mainTree.right = rightTree;
    return mainTree;
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

console.log('\nin order:', tree.traverse('in'));
console.log('pre order:', tree.traverse('pre'));
console.log('post order:', tree.traverse('post'));

console.log('\nincludes(3):', tree.includes(3));
console.log('includes(20):', tree.includes(20));
console.log('height():', tree.height());
console.log('isBalanced():', tree.isBalanced());

console.log('\nCREATE SEARCH TREE:');
let created = BinarySearchTree.create([4,2,15,14,11,6,12,3,13,1,7,10,9,5,8]);
created.print();
