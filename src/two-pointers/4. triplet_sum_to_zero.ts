/**
 * 题目：
 * 给定一个无序数组，找到所有的和为 0 的三元数组
 * 思路：
 * 三元 -> 二元
 * example：
 * Input: [-3, 0, 1, 2, -1, 1, -2]
   Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
   Explanation: There are four unique triplets whose sum is equal to zero.
 */

function search_pair(arr: number[], targetSum: number, left: number, triplets: number[][]): void {
  let right = arr.length - 1
  while (left < right) {
    const currentSum = arr[left] + arr[right]
    if (currentSum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]])
      left++
      right--
      // 跳过重复数据
      if (left < right && arr[left] === arr[left - 1]) {
        left++
      }
      if (left < right && arr[right] === arr[right + 1]) {
        right--
      }
    } else if (targetSum > currentSum) {
      left++
    } else {
      right--
    }
  }
}

export function search_triplets(arr: number[]): number[][] {
  arr.sort((a, b) => a - b) // 从小到大排序
  const triplets: number[][] = []
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue
    }
    search_pair(arr, -arr[i], i + 1, triplets)
  }
  return triplets
}

/**
 * 测试
 */
console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]))
