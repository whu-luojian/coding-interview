/**
 * 输出二叉树每一层的平均数
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

const find_level_averages = function (root: TreeNode | null): any[] {
  const result: any[] = []
  if (root === null) {
    return result
  }
  const queue = []
  queue.push(root)
  while (queue.length > 0) {
    const levelSize = queue.length // 每一层的节点个数
    let levelSum = 0
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift() as TreeNode
      levelSum += currentNode.value
      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }
    result.push(levelSum / levelSize)
  }

  return result
}

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Level order traversal: ${find_level_averages(root)}`)
