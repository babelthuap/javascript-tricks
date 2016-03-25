'use strict';

const Queue = require('./stackQueue').Queue;

// a directed graph using adjacency sets
class Graph {
  // 'nodes' is an optional array of nodes with which to initialize the graph
  constructor(nodes) {
    this.nodes = {};
    if (nodes) {
      nodes.forEach(node => this.nodes[node] = new Set());
    }
  }

  // 'neighbors' is an array or set of other nodes in the graph
  addNode(label, neighbors) {
    if (this.nodes.hasOwnProperty(label)) {
      throw new Error(`${label} is already a node`);
    }
    this.nodes[label] = new Set();
    if (neighbors) {
      neighbors.forEach(neighbor => this.addNeighbor(label, neighbor));
    }
  }

  _verifyExistenceOf(node) {
    if (!this.nodes.hasOwnProperty(node)) {
      throw new Error(`${node} is not a node in this graph`);
    }
  }

  removeNode(node) {
    this._verifyExistenceOf(node);
    delete this.nodes[node];
  }

  addNeighbor(node, neighbor) {
    this._verifyExistenceOf(node);
    this._verifyExistenceOf(neighbor);
    return this.nodes[node].add(neighbor);
  }

  addNeighbors(node, neighbors) {
    neighbors.forEach(neighbor => this.addNeighbor(node, neighbor));
  }

  removeNeighbor(node, neighbor) {
    this._verifyExistenceOf(node);
    return this.nodes[node].delete(neighbor);
  }

  getNodes() {
    return Object.keys(this.nodes);
  }

  getNeighbors(node) {
    this._verifyExistenceOf(node);
    return [...this.nodes[node]];
  }

  existsPath(nodeA, nodeB) {
    let todo = new Queue();
    let searched = new Set();
    todo.enqueue(nodeA);
    while (todo.size > 0) {
      let current = todo.dequeue();
      if (current === nodeB) {
        return true;
      } else {
        searched.add(current);
        this.nodes[current].forEach(neighbor => {
          if (!searched.has(neighbor)) {
            todo.enqueue(neighbor);
          }
        });
      }
    }
    return false;
  }

  print() {
    for (let node in this.nodes) {
      console.log(`${node}: ${this.getNeighbors(node).join(', ')}`);
    }
  }
}

console.log('\nGRAPH:');
// 1 → 2 ↘
// ↓ ↘ ↑  5
// 3 → 4 ↗
let graph = new Graph([1, 2, 3, 4, 5]);
graph.addNeighbors(1, [3,4,2]);
graph.addNeighbors(2, [5]);
graph.addNeighbors(3, [4]);
graph.addNeighbors(4, [2,5]);
graph.print();
console.log('existsPath(1, 5)', graph.existsPath(1, 5)); // -> true
console.log('existsPath(3, 2)', graph.existsPath(3, 2)); // -> true
console.log('existsPath(4, 3)', graph.existsPath(4, 3)); // -> false
console.log('existsPath(2, 4)', graph.existsPath(2, 4)); // -> false
