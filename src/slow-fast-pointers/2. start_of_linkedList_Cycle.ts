/**
 * 问题：
 * 给定一个有环单链表，找出环的起始节点
 */

export class Node {
  public value: any
  public next: Node
  constructor(value: any, next = null) {
    this.value = value
    // @ts-ignore
    this.next = next
  }
}

export function calculateCycleLength(slow: Node): number {
  let current = slow,
    cycleLength = 0
  while (true) {
    current = current.next
    cycleLength++
    if (current === slow) {
      break
    }
  }
  return cycleLength
}

export function findStart(head: Node, cycleLength: number): Node {
  let pointer1 = head,
    pointer2 = head
  while (cycleLength > 0) {
    pointer2 = pointer2.next
    cycleLength--
  }
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next
    pointer2 = pointer2.next
  }
  return pointer1
}

export function findCycleStart(head: Node): Node {
  let cycleLength = 0
  let slow = head,
    fast = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (slow === fast) {
      cycleLength = calculateCycleLength(slow)
      break
    }
  }
  return findStart(head, cycleLength)
}

const head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${findCycleStart(head).value}`)
