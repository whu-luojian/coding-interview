/**
 * 问题：
 * 给定一个单链表，判断链表是否有环
 */

class LNode {
  public value: any
  public next: LNode | null
  constructor(value: any, next = null) {
    this.value = value
    this.next = next
  }
}

function has_cycle(head: LNode | null): boolean {
  let slow = head,
    fast = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow && slow.next
    if (slow === fast) {
      return true
    }
  }
  return false
}

const head = new LNode(1)
head.next = new LNode(2)
head.next.next = new LNode(3)
head.next.next.next = new LNode(4)
head.next.next.next.next = new LNode(5)
head.next.next.next.next.next = new LNode(6)
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList has cycle: ${has_cycle(head)}`)
