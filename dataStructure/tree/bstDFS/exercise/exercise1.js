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

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.preOrder(root.left);
      this.preOrder(root.right);
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

const dfs = new DepthFirstSearch();
dfs.insert(10);
dfs.insert(17);
dfs.insert(8);
console.log(dfs);
console.log(dfs.search(dfs.root, 8));
dfs.preOrder(dfs.root);
dfs.inOrder(dfs.root);
dfs.postOrder(dfs.root);
