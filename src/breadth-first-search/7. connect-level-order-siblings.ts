/**
 * https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03
 */

export class TreeNode {
  public value: any
  public left: TreeNode | null
  public right: TreeNode | null
  public next: TreeNode | null
  constructor(value: any) {
    this.value = value
    this.left = null
    this.right = null
    this.next = null
  }
}

const connect_level_order_siblings = function (root: TreeNode | null): void {
  if (root === null) {
    return
  }
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    const levelSize = queue.length // 每一层的节点个数
    let previousNode: TreeNode | null = null
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift() as TreeNode
      if (previousNode !== null) {
        previousNode.next = currentNode
      }
      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
      previousNode = currentNode
    }
  }
}

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
connect_level_order_siblings(root)
