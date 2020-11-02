/**
 * 问题：
 * 给定一个有序数字数组 array 和目标和 sum，在数组中找到和为 sum 的数据对，输出两数字的索引
 * examples：
 * Input: [1, 2, 3, 4, 6], target=6
   Output: [1, 3]
   Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
 */

export function pair_with_target_sum(arr: number[], targetSum: number): [number, number] {
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    const currentSum = arr[left] + arr[right]
    if (currentSum === targetSum) {
      return [left, right]
    }
    if (currentSum < targetSum) {
      left++
    } else {
      right--
    }
  }
  return [-1, -1]
}

/**
 * test
 */
console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6))
