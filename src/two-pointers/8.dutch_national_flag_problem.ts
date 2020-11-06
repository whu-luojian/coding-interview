/**
 * 题目：
 * 给定一个包含0，1和2的数组，请对该数组进行内排序。
 * example：
 * Input: [1, 0, 2, 1, 0]
   Output: [0, 0, 1, 1, 2]
 */

export function dutch_flag_sort(arr: number[]): number[] {
  let low = 0,
    high = arr.length - 1,
    i = 0
  while (i < high) {
    if (arr[i] === 0) {
      ;[arr[i], arr[low]] = [arr[low], arr[i]]
      i++
      low++
    } else if (arr[i] === 1) {
      i++
    } else {
      ;[arr[i], arr[high]] = [arr[high], arr[i]]
      high--
    }
  }
  return arr
}

/**
 * 测试
 */
console.log(dutch_flag_sort([1, 0, 2, 1, 0]))
