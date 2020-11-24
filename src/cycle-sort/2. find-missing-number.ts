/**
 * 问题：
 * 我们得到了一个包含从范围0到n取的n个数字的数组。 由于阵列中的“ n + 1”个数字中只有“ n”个数字，因此请查找缺失的数字。
 * example:
 * Input: [4, 0, 3, 1]
   Output: 2
 */

const findMissingNumber = function (nums: number[]): number {
  let i = 0
  const n = nums.length
  while (i < n) {
    const j = nums[i]
    if (nums[i] < n && nums[i] !== nums[j]) {
      ;[nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i
    }
  }
  return n
}

console.log(findMissingNumber([4, 0, 3, 1]))
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1]))
