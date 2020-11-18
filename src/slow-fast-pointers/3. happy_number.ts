/**
 * 问题：
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，
  然后重复这个过程直到这个数变为 1，
  也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。
 * example
  输入: 19
  输出: true
  解释: 
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1
 */

export function findSquareSum(num: number): number {
  let sum = 0
  while (num > 0) {
    const digit = num % 10
    sum += digit * digit
    num = Math.floor(num / 10)
  }
  return sum
}

export function findHappyNumber(num: number): boolean {
  let slow = num,
    fast = num
  while (true) {
    slow = findSquareSum(slow)
    fast = findSquareSum(findSquareSum(fast))
    if (fast === 1) {
      return true
    }
    if (slow === fast) {
      break
    }
  }
  return slow === 1
}

console.log(findHappyNumber(23))
console.log(findHappyNumber(12))
console.log(findHappyNumber(19))
