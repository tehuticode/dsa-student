const BinaryTree = require('./binary-tree');

// Create a binary tree and insert sample data
const tree = new BinaryTree();
[8, 3, 10, 1, 6, 14, 4, 7, 13].forEach(value => tree.insert(value));

console.log("Q2: Create a binary tree object with sample data and display the whole tree");
console.log(tree.visualize());

console.log("In-order traversal:");
console.log(tree.inOrderTraversal());

console.log("\nQ3: Search function returning at least one node");
console.log("Searching for values greater than 10:");
const greaterThanTen = tree.search(value => value > 10);
console.log(greaterThanTen);

console.log("\nQ4: Search function returning no nodes");
console.log("Searching for even values greater than 15:");
const evenGreaterThanFifteen = tree.search(value => value > 15 && value % 2 === 0);
console.log(evenGreaterThanFifteen);
