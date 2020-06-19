/**
 * 题目：
 * Given an array of characters where each character represents a fruit tree,
 * you are given two baskets and your goal is to put maximum number of fruits in each basket.
 * The only restriction is that each basket can have only one type of fruit.
 * 通俗理解就是给定一个字符数组，找出最长的由两种字符组成的子数组
 * 例子1：
 * Input: Fruit=['A', 'B', 'C', 'A', 'C']
 * Output: 3
 * Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
 * 例子2：
 * Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
 * Output: 5
 * Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
 */

/**
 * 时间复杂度：O(N)，N表示给定水果（字符）数组的长度。外层for循环遍历了所有字符，内层while循环对于每个字符也执行了一次，所有
 * 时间复杂度是o(N + N)，近似等于O(N)
 * 空间复杂度：O(K)，因为用HashMap最多存储了k + 1个字符
 * @param fruits 水果（字符）数组
 */
export function fruits_into_baskets(fruits: string[]): number {
  let windowStart = 0,
    maxLength = 0
  const fruitFrequency = new Map()
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd]
    if (fruitFrequency.has(rightFruit)) {
      fruitFrequency.set(rightFruit, fruitFrequency.get(rightFruit) + 1)
    } else {
      fruitFrequency.set(rightFruit, 1)
    }
    while (fruitFrequency.size > 2) {
      const leftFruit = fruits[windowStart]
      fruitFrequency.set(leftFruit, fruitFrequency.get(leftFruit) - 1)
      if (fruitFrequency.get(leftFruit) === 0) {
        fruitFrequency.delete(leftFruit)
      }
      windowStart++
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

/**
 * test
 */
const fruits = ['A', 'B', 'C', 'B', 'B', 'C']
console.log(fruits_into_baskets(fruits))
