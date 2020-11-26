/**
 * 问题：
 * 给定一个单链表的 head 和 p，q 两个节点，翻转 p 和 q 组成的子链表
 */

export class Node {
  public value: any
  public next: Node | null
  constructor(value: any, next = null) {
    this.value = value
    this.next = next
  }
}

const reverseSubList = function (head: Node, p: number, q: number): Node {
  if (p === q) {
    return head
  }
  let current = head,
    previous = null
  let i = 0
  while (current !== null && i < p - 1) {
    previous = current
    current = current.next as Node
    i++
  }

  const lastNodeOfFirstPart = previous
  const lastNodeOfSunList = current
  i = 0
  while (current !== null && i < q - p + 1) {
    const next = current.next
    current.next = previous
    previous = current
    current = next as Node
    i++
  }

  if (lastNodeOfFirstPart !== null) {
    lastNodeOfFirstPart.next = previous
  } else {
    head = previous as Node
  }

  lastNodeOfSunList.next = current
  return head
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
console.log(reverseSubList(head, 2, 4))
