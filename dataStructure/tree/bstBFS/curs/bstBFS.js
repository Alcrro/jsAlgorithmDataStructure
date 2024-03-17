/*

! 	Breadth First Search (BFS)

? 	Explore all nodes at the present depth prior to moving on the nodes at the next depth level

*/
/*

! 	BFS Traversal Approach

?	 	1. Create a queue
?		2. Enqueue the root node
?		3. A long as a node exists in the queue
?				a. Dequeue the node from the front
?				b. Read the node's value
?				c. Enqueue the node's left child if it exists
?				d. Enqueue the node's right child if it exists
 
*/

/*

! Binary search tree Min | Max

? 	- min - left child value is always less than the paren value
? 	-	max -	right child value is always the largest than the parent value

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BstBFS {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      return this.insertNode(this.root, newNode);
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

  levelOrder() {
    // use the optimized queue implementation
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // remove leaf
      if (!root.left && !root.right) {
        return null;
      }
      // remove a node that has single child
      else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      // remove a node that has two child
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
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
      this.postOrder(root.right);
      this.postOrder(root.left);
      console.log(root.value);
    }
  }
}

const bfs = new BstBFS();

bfs.insert(9);
bfs.insert(4);
bfs.insert(17);
bfs.insert(3);
bfs.insert(6);
bfs.insert(22);
bfs.insert(5);
bfs.insert(7);
bfs.insert(20);
bfs.insert(10);
// console.log(bfs);
// const inOrder = bfs.inOrder(bfs.root);
// console.log("inOrder: " + inOrder);
// const preOrder = bfs.preOrder(bfs.root);
// console.log("preOrder: " + preOrder);
// const postOrder = bfs.postOrder(bfs.root);
// console.log("postOrder: " + postOrder);

bfs.levelOrder();
bfs.delete(3);
bfs.levelOrder();
// bfs.delete(15);
// bfs.levelOrder();
// bfs.levelOrder();
// console.log(bfs.min(bfs.root));
// console.log(bfs.max(bfs.root));
