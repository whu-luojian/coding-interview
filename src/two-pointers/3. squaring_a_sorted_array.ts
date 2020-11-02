/**
 * 问题：
 * 给定一个有序序数组（有负数），将数组的元素平方之和排序返回新的数组
 * example：
 * Input: [-2, -1, 0, 2, 3]
   Output: [0, 1, 4, 4, 9]
 */

export function make_squares(arr: number[]): number[] {
  const n = arr.length
  const squares = Array(n).fill(0)
  let highestSquareIdx = n - 1
  let left = 0
  let right = n - 1
  while (left <= right) {
    const leftSquare = arr[left] * arr[left],
      rightSquare = arr[right] * arr[right]
    if (leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare
      left++
    } else {
      squares[highestSquareIdx] = rightSquare
      right--
    }
    highestSquareIdx--
  }
  return squares
}

/**
 * 测试
 */
console.log(make_squares([-2, -1, 0, 2, 3]))
