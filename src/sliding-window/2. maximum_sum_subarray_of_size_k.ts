/**
 * 题目：
 * Given an array of positive numbers and a positive number ‘k’,
 * find the maximum sum of any contiguous subarray of size ‘k’.
 * 例子：
 * Input: [2, 1, 5, 1, 3, 2], k=3
 * Output: 9
 * Explanation: Subarray with maximum sum is [5, 1, 3].
 */

const array = [2, 1, 5, 1, 3, 2],
  k = 3

/**
 * 暴力解法
 * 时间复杂度：O(N * K) N为数组长度
 * @param {*} arr 数组
 * @param {*} k k
 */
export function max_sub_array_of_size_k_by_brute(arr: number[], k: number): number {
  let maxSum = 0,
    windowSum = 0
  for (let i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0
    for (let j = i; j < i + k; j++) {
      windowSum += arr[j]
    }
    maxSum = Math.max(maxSum, windowSum)
  }
  return maxSum
}

/**
 * 滑动窗口解法
 * 时间复杂度：O(N) N为数组长度
 * 空间复杂度：O(1)
 * @param {*} arr arr
 * @param {*} k k
 */
export function max_sub_array_of_size_k_by_slide(arr: number[], k: number): number {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum)
      windowSum -= arr[windowStart]
      windowStart++
    }
  }
  return maxSum
}

/**
 * test
 */

console.log('brute-force:', max_sub_array_of_size_k_by_brute(array, k))
console.log('sliding-window', max_sub_array_of_size_k_by_slide(array, k))
