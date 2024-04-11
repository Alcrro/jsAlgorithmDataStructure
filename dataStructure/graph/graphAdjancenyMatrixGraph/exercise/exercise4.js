class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacency of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacency);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex1);
    this.adjacencyList[vertex2].delete(vertex2);
  }

  hasEdge(vertex1, vertex2) {
    return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1);
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graphX = new Graph();
graphX.addVertex("A");
graphX.addVertex("C");
graphX.addEdge("A", "B");
graphX.addEdge("A", "C");
console.log(graphX.hasEdge("A", "B"));
console.log(graphX.hasEdge("A", "C"));
graphX.removeVertex("A");
graphX.display();
