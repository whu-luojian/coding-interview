/**
 * 问题：
 * 我们得到了一个未排序的数组，其中包含从1到“ n”范围的数字。 该数组可以有重复项，这意味着某些数字将丢失。 找到所有那些丢失的数字。
 * example:
 * Input: [2, 3, 1, 8, 2, 3, 5, 1]
   Output: 4, 6, 7
 */

const findMissingNumbers = function (nums: number[]): number[] {
  let i = 0
  while (i < nums.length) {
    const j = nums[i] - 1
    if (nums[i] !== nums[j]) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++
    }
  }
  const missingNumbers = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      missingNumbers.push(i + 1)
    }
  }
  return missingNumbers
}

console.log(findMissingNumbers([2, 3, 1, 8, 2, 3, 5, 1]))
