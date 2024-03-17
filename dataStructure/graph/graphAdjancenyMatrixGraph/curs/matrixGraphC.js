/*
! Graph Representation
? Adjacency matrix
? Adjacency List
*/

/*
! Adjacency matrix 

? An adjacency matrix is a 2D array of size V x V where V is the number of vertices in the graph
? Each row and column represent a vertex
? If the value of an element say, matrix[i][j] is 1, it represents that there is an edge connecting vertex i an vertex j

*/

/*
! 	Adjacency List
? 	Vertices are stored in a map like data structure, and every vertex stores a list of its adjacent vertices

! Adjacency List representation
? A -> B
? B -> A, C
? C -> B
*/

/*
! Adjacency matrix  vs Adjacency List

?		With an adjacency list, we only need to store tha values for the edges that exist.
?		With adjacency matrix, you store values irrespective of whether an edge exits or not.
?				 Storage wise, an adjacency list is way more efficient

? 	With adjacency list, inserting and finding adjacent node is constant time complexity whereas with 
? 			adjacency matrix, it is linear time complexity

? 	An adjacency list allows you to store additional values with an edge such as weight of the edge. 
?				With adjacency matrix, such information would have to be stored externally

*/

//! Adjacency matrix representation

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];
console.log(matrix[1][2]);

adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjacencyList["B"]);
