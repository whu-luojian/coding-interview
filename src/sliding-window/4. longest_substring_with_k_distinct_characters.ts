/**
 * 题目：
 * Given a string, find the length of the longest substring in it with no more than K distinct characters.
 * 给一个字符串，找出最多不超过 k 个不同的字符组成的最长子串，输出最长子串的长度
 * 例子1：
 * Input: String="araaci", K=2
 * Output: 4
 * Explanation: The longest substring with no more than '2' distinct characters is "araa".
 * 例子2：
 * Input: String="cbbebi", K=3
 * Output: 5
 * Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
 */

/**
 * 时间复杂度：O(N)，N表示给定字符串的长度。外层for循环遍历了所有字符，内层while循环对于每个字符也执行了一次，所有
 * 时间复杂度是o(N + N)，近似等于O(N)
 * 空间复杂度：O(K)，因为用HashMap最多存储了k + 1个字符
 * @param str 给定字符串
 * @param k 最多不同的字符个数
 */
export function longest_substring_with_k_distinct(str: string, k: number): number {
  let windowStart = 0,
    maxLength = 0
  const charFrequency = new Map()

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (!charFrequency.has(rightChar)) {
      charFrequency.set(rightChar, 1)
    } else {
      charFrequency.set(rightChar, charFrequency.get(rightChar) + 1)
    }

    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (charFrequency.size > k) {
      const leftChar = str[windowStart]
      charFrequency.set(leftChar, charFrequency.get(leftChar) - 1)
      if (charFrequency.get(leftChar) === 0) {
        charFrequency.delete(leftChar)
      }
      windowStart += 1
    }

    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

/**
 * test
 */
const str = 'araaci',
  k = 2
console.log(longest_substring_with_k_distinct(str, k))
