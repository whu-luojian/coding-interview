/**
 * 问题：
 * 给定一个单链表，输出单链表的中间节点
 * examples：
 * Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
   Output: 3
   Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
   Output: 4
 */

export class Node {
  public value: any
  public next: Node | null
  constructor(value: any, next = null) {
    this.value = value
    this.next = next
  }
}

export function findMiddleOfLinkedList(head: Node): Node {
  let slow: Node = head,
    fast: Node | null = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next as Node
    fast = fast.next.next
  }
  return slow
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`)

head.next.next.next.next.next = new Node(6)
console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`)

head.next.next.next.next.next.next = new Node(7)
console.log(`Middle Node: ${findMiddleOfLinkedList(head).value}`)
