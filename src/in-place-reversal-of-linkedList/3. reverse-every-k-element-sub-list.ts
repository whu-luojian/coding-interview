/**
 * 问题：
 * 给定单链表的 head 和数字 k，从 head 开始翻转链表的每个 k 大小的子链表
 */

export class Node {
  public value: any
  public next: Node | null
  constructor(value: any, next = null) {
    this.value = value
    this.next = next
  }
}

const reverseEveryKElements = function (head: Node | null, k: number): Node | null {
  if (k <= 1 || head === null) {
    return head
  }
  let current: Node | null = head,
    previous = null
  while (true) {
    const lastNodeOfPreviousPart = previous
    const lastNodeOfSubList = current
    let next = null
    let i = 0
    while (current !== null && i < k) {
      next = current.next
      current.next = previous
      previous = current
      current = next
      i++
    }
    if (lastNodeOfPreviousPart !== null) {
      lastNodeOfPreviousPart.next = previous
    } else {
      head = previous
    }
    lastNodeOfSubList.next = current
    if (current === null) {
      break
    }
    previous = lastNodeOfSubList
  }
  return head
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)

console.log(reverseEveryKElements(head, 3))
