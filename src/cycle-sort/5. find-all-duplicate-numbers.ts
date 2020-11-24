/**
 * 问题：
 * 给定一个未排序的数组，其中包含从1到n范围内的“ n”个数字。 该数组有一些数字出现两次，不使用任何额外的空间查找所有这些重复的数字。
 * example:
 * Input: [3, 4, 4, 5, 5]
   Output: [4, 5]
 */

const findAllDuplicates = function (nums: number[]): number[] {
  let i = 0
  while (i < nums.length) {
    const j = nums[i] - 1
    if (nums[i] !== nums[j]) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++
    }
  }
  const duplicateNumbers = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      duplicateNumbers.push(nums[i])
    }
  }
  return duplicateNumbers
}

console.log(findAllDuplicates([3, 4, 4, 5, 5]))
console.log(findAllDuplicates([5, 4, 7, 2, 3, 5, 3]))
