/**
 * 题目：
 * Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s,
 * find the length of the longest contiguous subarray having all 1s.
 * 例子：
 * Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
 * Output: 6
 * Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
 */

/**
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 * @param arr 数组
 * @param k k
 */
export function length_of_longest_subarray(arr: (0 | 1)[], k: number): number {
  let maxLength = 0,
    windowStart = 0,
    zeroFrequency = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 0) {
      zeroFrequency++
    }
    while (zeroFrequency > k) {
      if (arr[windowStart] === 0) {
        zeroFrequency--
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
console.log(length_of_longest_subarray([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2))
console.log(length_of_longest_subarray([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3))
