'use strict';

// a directed graph using adjacency sets
class Graph {
  // 'nodes' is an optional array of nodes with which to initialize the graph
  constructor(nodes) {
    this.nodes = {};
    if (nodes) {
      nodes.forEach(node => this.nodes[node] = new Set());
    }
  }

  // 'neighbors' is an array of other nodes in the graph
  addNode(label, neighbors) {
    if (this.nodes.hasOwnProperty(label)) {
      throw new Error(`${label} is already a node`);
    }
    this.nodes[label] = new Set();
    neighbors.forEach(neighbor => this.addNeighbor(label, neighbor));
  }

  _verifyExistenceOf(node) {
    if (!this.nodes.hasOwnProperty(node)) {
      throw new Error(`${node} is not a node in this graph`);
    }
  }

  addNeighbor(node, neighbor) {
    this._verifyExistenceOf(node);
    this._verifyExistenceOf(neighbor);
    return this.nodes[node].add(neighbor);
  }

  removeNeighbor(node, neighbor) {
    this._verifyExistenceOf(node);
    return this.nodes[node].delete(neighbor);
  }
}
