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
        return this.insertNode(root.left, value);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        return this.insertNode(root.right, value);
      }
    }
  }

  isEmpty() {
    return this.root === null;
  }
}
const bfsList = new Bfs();
bfsList.insert(10);
bfsList.insert(20);
bfsList.insert(7);
console.log(bfsList);
bfsList.levelOrder();
