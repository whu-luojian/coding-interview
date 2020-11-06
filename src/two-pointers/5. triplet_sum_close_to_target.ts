/**
 * 题目：
 * 给定一个无序数组个目标值，找出和最接近目标值的一个三元数组，返回该三元数组的和，如果存在多个三元数组，返回和最小的三元数组的和
 * example：
 * Input: [-2, 0, 1, 2], target=2
   Output: 1
   Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
 */

export function triplet_sum_close_to_target(arr: number[], targetSum: number): number {
  arr.sort((a, b) => a - b)
  let smallest_difference = Infinity
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right]
      if (target_diff === 0) {
        return targetSum - target_diff
      }
      if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
        smallest_difference = target_diff // 保存最接近目标值的差值
      }
      if (
        Math.abs(target_diff) === Math.abs(smallest_difference) &&
        target_diff > smallest_difference
      ) {
        smallest_difference = target_diff
      }

      if (target_diff > 0) {
        left++
      } else {
        right--
      }
    }
  }
  return targetSum - smallest_difference
}

/**
 * 测试
 */
console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2))
