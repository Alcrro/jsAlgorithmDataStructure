class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bfs {
  constructor() {
    this.root = null;
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
      return this.min(root.right);
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
    return null;
  }

  isEmpty() {
    return this.root === null;
  }
}

const bfsList = new Bfs();
bfsList.insert(10);
bfsList.insert(7);
bfsList.insert(18);
bfsList.insert(16);
bfsList.insert(22);

// console.log(bfsList);
// console.log(bfsList.min(bfsList.root));
// console.log(bfsList.max(bfsList.root));

bfsList.levelOrder();
bfsList.delete(7);
bfsList.levelOrder();
