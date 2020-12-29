/**
 * zigzag，翻转输出：https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0
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

const traverse = function (root: TreeNode | null): any[] {
  const result: any[] = []
  if (root === null) {
    return result
  }
  const queue = []
  let leftToRight = true
  queue.push(root)
  while (queue.length > 0) {
    const levelSize = queue.length // 每一层的节点个数
    const currentLevel = []
    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift() as TreeNode
      if (leftToRight) {
        currentLevel.push(currentNode)
      } else {
        currentLevel.unshift(currentNode)
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right)
      }
    }
    result.push(currentLevel)
    leftToRight = !leftToRight
  }

  return result
}

const root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Level order traversal: ${traverse(root)}`)
