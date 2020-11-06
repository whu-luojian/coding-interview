/**
 * 题目：
 * 给定一个正整数数组和目标值，找出所有乘积小于目标值的连续子数组
 * example：
 * Input: [2, 5, 3, 10], target=30 
   Output: [2], [5], [2, 5], [3], [5, 3], [10]
   Explanation: There are six contiguous subarrays whose product is less than the target.
 */

export function find_subarrays(arr: number[], target: number): number[][] {
  const result = []
  for (let windowStart = 0; windowStart < arr.length; windowStart++) {
    let windowProduct = arr[windowStart]
    let windowEnd = windowStart
    const window = [arr[windowStart]]
    while (windowProduct < target) {
      result.push([...window])
      windowEnd++
      windowProduct = windowProduct * arr[windowEnd]
      window.push(arr[windowEnd])
    }
  }
  return result
}

/**
 * 测试
 */
console.log(find_subarrays([2, 5, 3, 10], 30))
console.log(find_subarrays([8, 2, 6, 5], 50))
