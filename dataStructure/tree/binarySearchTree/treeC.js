/*
! 	Tree

? 1.	A tree is hierarchial data structure that consists of nodes connected by edges
?	2.	A tree is a non-linear data structure, compared to arrays, linked lists, stacks and
?	 			queues which are linear data structures.
? 3.	In linear data structures, the time required to search is proportional to the size of the data set.
?	4.	Trees however, owning to the nonlinear nature allow quicker and easier access to the data.
? 5.	A tree wll not contain any loops or cycles.

*/

/*
! Binary tree

? 1.	A binary tree is a tree data structure in which each node has at most two children
?	2.	They are referred to as left child and right child


 */

/*
! Binary Search Tree( BST )

? 1. The value of each left node must be smaller than the parent node
? 2. The value of each right node must be grater than the parent node
? 3. Each node has at most two children

*/

/*
 ! Generally there are two ways to traversing tree

? 	1.	Depth First Search (DFS)
? 	2.	Breadth First Search (BFS)

*/

/*

! 	Binary search tree Operations

?	1.	Insertion -	to add a node the the tree
? 2.	Search    -	to find a node given its value
? 	- Depth for search (DFS) & Breath for search (BFS) - to visit all node in the tree 
?	3.	Deletion 	- to remove a node given a value

*/

/*
! 	Binary search tree usage

? 	-	 Searching
? 	-	 Sorting
? 	-	 To implement abstract data types such as lookup tables an priority queues
*/

//! implementation binary search tree class

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertion(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  isEmpty() {
    return this.root === null;
  }
  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
}

const bst = new BinarySearchTree();

bst.insertion(10);
bst.insertion(7);
bst.insertion(11);
bst.insertion(8);
console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 11));
console.log(bst.search(bst.root, 15));
