// Define a Node class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to invert the tree
function invertTree(node) {
    if (!node) return; // Base case: if null, stop
    // Swap left and right children
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    // Recurse to subtrees
    invertTree(node.left);
    invertTree(node.right);
}

// Function to print the tree (simple preorder traversal)
function printTree(node, level = 0) {
    if (!node) return;
    console.log("  ".repeat(level) + node.value); // Indent based on level
    printTree(node.left, level + 1);
    printTree(node.right, level + 1);
}

// Build the tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);

// Test it
console.log("Before inversion:");
printTree(root);
invertTree(root);
console.log("\nAfter inversion:");
printTree(root);