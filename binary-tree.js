/**
 * Represents a node in the binary tree.
 */
class TreeNode {
  /**
   * @param {number} value - The value stored in the node.
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Represents a binary search tree.
 */
class BinaryTree {
  constructor() {
    this.root = null;
  }

  /**
   * Inserts a new value into the binary search tree.
   * @param {number} value - The value to insert.
   */
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * Helper method to recursively insert a node.
   * @param {TreeNode} node - The current node in the recursion.
   * @param {TreeNode} newNode - The new node to insert.
   */
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * Performs an in-order traversal of the tree.
   * @returns {number[]} An array of values in in-order.
   */
  inOrderTraversal() {
    const result = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }

  /**
   * Helper method for in-order traversal.
   * @param {TreeNode} node - The current node in the traversal.
   * @param {number[]} result - The array to store the traversal result.
   */
  inOrderTraversalNode(node, result) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this.inOrderTraversalNode(node.right, result);
    }
  }

  /**
   * Searches for nodes that meet a given criteria.
   * @param {function} criteria - A function that takes a node value and returns a boolean.
   * @returns {number[]} An array of values that meet the criteria.
   */
  search(criteria) {
    const result = [];
    this.searchNode(this.root, criteria, result);
    return result;
  }

  /**
   * Helper method for searching nodes.
   * @param {TreeNode} node - The current node in the search.
   * @param {function} criteria - The search criteria function.
   * @param {number[]} result - The array to store the search result.
   */
  searchNode(node, criteria, result) {
    if (node !== null) {
      if (criteria(node.value)) {
        result.push(node.value);
      }
      this.searchNode(node.left, criteria, result);
      this.searchNode(node.right, criteria, result);
    }
  }

  /**
   * Creates a visual representation of the tree.
   * @returns {string} A string representation of the tree.
   */
  visualize() {
    return this.visualizeNode(this.root, '', true, '');
  }

  /**
   * Helper method for tree visualization.
   * @param {TreeNode} node - The current node in the visualization.
   * @param {string} prefix - The prefix string for the current line.
   * @param {boolean} isLeft - Whether the current node is a left child.
   * @param {string} str - The accumulated string representation.
   * @returns {string} The updated string representation.
   */
  visualizeNode(node, prefix, isLeft, str) {
    if (node === null) {
      return str;
    }
    if (node.right !== null) {
      str = this.visualizeNode(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false, str);
    }
    str += `${prefix}${isLeft ? '└── ' : '┌── '}${node.value}\n`;
    if (node.left !== null) {
      str = this.visualizeNode(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true, str);
    }
    return str;
  }
}

module.exports = BinaryTree;
