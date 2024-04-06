class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BreathFirstSearch {
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
      //remove leaf
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
  }

  levelOrder() {
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
  isEmpty() {
    return this.root === null;
  }
}

const bfsf = new BreathFirstSearch();

bfsf.insert(10);
bfsf.insert(5);
bfsf.insert(15);

console.log(bfsf);
console.log(bfsf.search(bfsf.root, 5));
bfsf.levelOrder();
console.log(bfsf.min(bfsf.root));
