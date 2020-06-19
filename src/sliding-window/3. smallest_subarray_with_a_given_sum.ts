/**
 * 题目：
 * Given an array of positive numbers and a positive number ‘S’,
 * find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
 * 例子：
 * Input: [2, 1, 5, 2, 3, 2], S=7
 * Output: 2
 * Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
 */

/**
 * 事件复杂度：O(N)
 * 空间复杂度：O(1)
 * @param arr arr
 * @param sum s
 */
export function smallest_subarray_with_given_sum(arr: number[], sum: number): number {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    while (windowSum >= sum) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart]
      windowStart++
    }
  }

  if (minLength === Infinity) {
    return 0
  }
  return minLength
}

/**
 * test
 */
const array = [2, 1, 5, 2, 3, 2],
  sum = 7
console.log(smallest_subarray_with_given_sum(array, sum))
