/*
! Tree Traversal

? Visiting every node in the tree
? A hierarchical data structure like a tree can be traversed in different ways


*/

//! implementation binary search Depth First Search

/*

? 	1.	The DFS algorithm starts at the root node and explores as far as possible along
?			each branch before backtracking.
? 	2.	Visit the root node, visit all the nodes in the left subtree and visit 
?			all the nodes in the right subtree.
? 	3.	Depending on the order in which we do this, there can be three types of DFS traversals"

?		- Preorder	 
?		- Inorder	 
?		- Postorder	

*/

/*

! 	Preorder Traversal

?		1.	Read the data of the node
?		2.	Visit the left subtree
?		3.	Visit the right subtree

*/

/*

! 	Inorder Traversal

?		1.	Visit the left subtree
?		2.	Read the data of the node
?		3.	Visit the right subtree

*/
/*

! 	Postorder Traversal

?		1.	Visit the left subtree
?		3.	Visit the right subtree
?		2.	Read the data of the node

*/

//!  implementation

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BstDFS {
  constructor() {
    this.root = null;
  }

  inert(value) {
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
        return this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        return this.insertNode(root.right, newNode);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
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

  isEmpty() {
    return this.root === null;
  }
}

const bstDFS = new BstDFS();
bstDFS.inert(10);
bstDFS.inert(5);
bstDFS.inert(15);
bstDFS.inert(3);
bstDFS.inert(7);

console.log(bstDFS.search(bstDFS.root, 15));
console.log(bstDFS.search(bstDFS.root, 7));
console.log(bstDFS.search(bstDFS.root, 17));
// bstDFS.preOrder(bstDFS.root);
// bstDFS.inOrder(bstDFS.root);
// bstDFS.postOrder(bstDFS.root);
