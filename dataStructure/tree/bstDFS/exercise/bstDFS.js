class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class DepthFirstSearch {
  constructor() {
    this.root = null;
  }

  // insert node
  insert(value) {
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

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
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
      return this.min(root.right);
    }
  }

  delete(value) {
    if (this.isEmpty()) {
      return null;
    } else {
      this.root = this.deleteNode(this.root, value);
    }
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
      if (!root.left && !root.right) {
        return null;
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return null;
  }

  levelOrder() {
    /** Use the optimised queue enqueue and dequeue from queue-object.js instead.
     * I've used an array for simplicity. */

    let queue = {};
    let front = 0;
    let rear = 0;

    queue[rear] = this.root;
    rear++;

    while (queue) {
      let curr = queue[front];

      delete queue[front];
      front++;
      if (curr) {
        console.log(curr.value);
      } else {
        return;
      }
      if (curr.left) {
        queue[rear] = curr.left;
        rear++;
      }
      if (curr.right) {
        queue[rear] = curr.right;
        rear++;
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

  isEmpty() {
    return this.root === null;
  }
}
const dfsList = new DepthFirstSearch();
dfsList.insert(10);
dfsList.insert(5);
dfsList.insert(15);
dfsList.insert(3);
dfsList.insert(7);
// console.log(dfsList);
// dfsList.preOrder(dfsList.root);
// console.log(" ");
// dfsList.inOrder(dfsList.root);
// console.log(" ");
// dfsList.postOrder(dfsList.root);
// console.log(" ");
// console.log(dfsList.search(dfsList.root, 4));
dfsList.levelOrder();
// dfsList.delete(5);
// dfsList.printLevel(dfsList.root, 3);
