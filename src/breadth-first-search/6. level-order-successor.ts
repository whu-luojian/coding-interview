/**
 * Given a binary tree and a node, find the level order successor of the given node in the tree.
 * The level order successor is the node that appears right after the given node in the level order traversal.
 */

export class TreeNode {
  public value: any
  public left: TreeNode | null
  public right: TreeNode | null
  constructor(value: any) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const find_successor = function (root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) {
    return null
  }
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    const currentNode = queue.shift() as TreeNode
    if (currentNode.left !== null) {
      queue.push(currentNode.left)
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right)
    }
    if (currentNode.value === key) {
      break
    }
  }

  if (queue.length) {
    return queue.shift() as TreeNode | null
  }

  return null
}

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
let result = find_successor(root, 12)
if (result != null) {
  console.log(result.value)
}
result = find_successor(root, 9)
if (result != null) {
  console.log(result.value)
}
