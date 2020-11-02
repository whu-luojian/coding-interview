/**
 * 问题：
 * 给定一个有序数组，移除数组中的所有重复元素，不可使用额外空间，返回最终的数组长度
 * example:
 * Input: [2, 3, 3, 3, 6, 9, 9]
   Output: 4
   Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
 */

export function remove_duplicates(arr: number[]): number {
  let nextNonDuplicate = 0
  let i = 1
  while (i < arr.length) {
    if (arr[nextNonDuplicate] !== arr[i]) {
      nextNonDuplicate += 1
      arr[nextNonDuplicate] = arr[i]
    }
    i += 1
  }
  return nextNonDuplicate + 1
}

/**
 * 测试
 */
console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]))

/**
 * 类似问题：
 * 给定一个无序数组和目标值 key，移除数组中的所有 key 元素，返回最终数组的长度
 * example:
 * Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3
   Output: 4
   Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9].
 */

export function remove_element(arr: number[], key: number): number {
  let nextElement = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i]
      nextElement++
    }
  }
  return nextElement
}

/**
 * test
 */
console.log(remove_element([3, 2, 3, 6, 3, 10, 9, 3], 3))
