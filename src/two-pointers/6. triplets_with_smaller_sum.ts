/**
 * 题目：
 * 给定一个无序数组 arr 和一个目标和 target，输出满足条件 arr[i] + arr[j] + arr[k] < target，并且 i，j，k都不相同的三元组的数量
 * example:
 * Input: [-1, 4, 2, 1, 3], target=5 
   Output: 4
   Explanation: There are four triplets whose sum is less than the target: 
     [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
 */

export function triplets_with_smaller_sum(arr: number[], target: number): number {
  arr.sort((a, b) => a - b) // [-1, 1, 2, 3, 4]
  let count = 0
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right]
      if (sum < target) {
        count = count + right - left
        left++
      } else {
        right--
      }
    }
  }
  return count
}

/**
 * 测试
 */
console.log(triplets_with_smaller_sum([-1, 4, 2, 1, 3], 5))
console.log(triplets_with_smaller_sum([-1, 0, 2, 3], 3))
