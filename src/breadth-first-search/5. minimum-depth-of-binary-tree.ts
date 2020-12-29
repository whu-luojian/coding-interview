/**
 * 输出二叉树的最小深度
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

const find_minimum_depth = function (root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  const queue = []
  let minDepth = 0
  queue.push(root)
  while (queue.length > 0) {
    minDepth++
    const levelSize = queue.length // 每一层的节点个数
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift() as TreeNode
      if (currentNode.left === null && currentNode.right === null) {
        return minDepth
      }
      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }
  }

  return minDepth
}

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
