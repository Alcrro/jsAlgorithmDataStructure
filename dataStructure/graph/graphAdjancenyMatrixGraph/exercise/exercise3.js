class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      return;
    }
    this.adjacencyList[vertex] = new Set();
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
    for (const removeVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, removeVertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  hasEdge(vertex1, vertex2) {
    return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1);
  }
  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");

graph.display();
graph.removeVertex("A");
console.log(" ");
graph.display();
console.log(" ");
graph.removeEdge("D", "C");

graph.display();
