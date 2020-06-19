/**
 * 题目：
 * 给定一个数组，输出尺寸为K的连续子数组的平均组
 * Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
 * Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
 */

const array = [1, 3, 2, 6, -1, 4, 1, 8, 2],
  k = 5

/**
 * brute-force algorithm 暴力解法
 * 时间复杂度：O(N * K) N为数组长度
 * @param {*} arr 数组
 * @param {*} k 连续子数组尺寸
 */
export function find_averages_of_subarrays_by_brute(arr: number[], k: number): number[] {
  const result = []
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0.0
    for (let j = i; j < i + k; j++) {
      sum += arr[j]
    }
    result.push(sum / k)
  }
  return result
}

/**
 * 滑动窗口解法
 * 时间复杂度：O(N) N为数组长度
 * @param {*} arr 数组
 * @param {*} k 连续子数组尺寸
 */
export function find_averages_of_subarrays_by_slide(arr: number[], k: number): number[] {
  const result = []
  let windowSum = 0.0,
    windowStart = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    if (windowEnd >= k - 1) {
      result.push(windowSum / k)
      windowSum -= arr[windowStart] // 滑动一次，减去窗口第一个值
      windowStart += 1
    }
  }
  return result
}

/**
 * test
 */

console.log('brute-force:', find_averages_of_subarrays_by_brute(array, k))
console.log('sliding-window:', find_averages_of_subarrays_by_slide(array, k))
