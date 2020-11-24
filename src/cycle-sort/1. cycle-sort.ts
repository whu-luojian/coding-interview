/**
 * 问题：
 * 编写一个函数，不使用任何多余的空间对数组进行排序
 * example:
 * Input: [3, 1, 5, 4, 2]
   Output: [1, 2, 3, 4, 5]
 */

const cyclicSort = function (nums: number[]): number[] {
  let i = 0
  while (i < nums.length) {
    const j = nums[i] - 1 // correct index
    if (i !== j) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++
    }
  }
  return nums
}

console.log(cyclicSort([3, 1, 5, 4, 2]))
console.log(cyclicSort([2, 6, 4, 3, 1, 5]))
console.log(cyclicSort([1, 5, 6, 4, 3, 2]))
