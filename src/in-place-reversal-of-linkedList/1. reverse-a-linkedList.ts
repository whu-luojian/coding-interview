/**
 * 问题：
 * 链表翻转：给定一个单链表的 head，翻转链表并返回新链表的 head
 */

export class Node {
  public value: any
  public next: Node | null
  constructor(value: any, next = null) {
    this.value = value
    this.next = next
  }
}

const reverse = function (head: Node | null): Node | null {
  let current = head,
    previous = null
  while (current !== null) {
    const next = current.next
    current.next = previous
    previous = current
    current = next
  }
  return previous
}

const head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(8)
head.next.next.next.next = new Node(10)
console.log(reverse(head))
