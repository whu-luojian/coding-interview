/**
 * 问题：
 * 给定一个未排序的数组，其中包含从1到“ n”范围内的“ n + 1”个数字。 该数组只有一个重复数字，但可以重复多次。 查找该重复的编号，而不使用任何多余的空间。
 * example：
 * Input: [2, 4, 1, 4, 4]
   Output: 4
 */

const findDuplicate = function (nums: number[]): number {
  let i = 0
  while (i < nums.length) {
    if (nums[i] !== i + 1) {
      const j = nums[i] - 1
      if (nums[i] !== nums[j]) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      } else {
        return nums[i]
      }
    } else {
      i++
    }
  }
  return -1
}

console.log(findDuplicate([1, 4, 4, 3, 2]))
console.log(findDuplicate([2, 1, 3, 3, 5, 4]))
console.log(findDuplicate([2, 4, 1, 4, 4]))
