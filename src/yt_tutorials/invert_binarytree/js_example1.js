// Define a Node class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;  // No left child yet
        this.right = null; // No right child yet
    }
}

// Build a small tree
let root = new Node(1);      // Root is 1
root.left = new Node(2);     // Left child is 2
root.right = new Node(3);    // Right child is 3
root.left.left = new Node(4); // Left child of 2 is 4
root.left.right = new Node(5); // right child of 2 is 5

// What this looks like:
//      1
//     / \
//    2   3
//   / \
//  4   5

function invertTree(node) {
    if (!node) return; // If no node, stop
    // Swap left and right
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    // Recurse to children
    invertTree(node.left);
    invertTree(node.right);
}

// Test it
console.log("Before:", root);
invertTree(root);
console.log("After:", root);