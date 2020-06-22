/**
 * 替换后相同字母的最长子串
 * 题目：
 * Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter,
 * find the length of the longest substring having the same letters after replacement.
 * 例子：
 * Input: String="aabccbb", k=2
 * Output: 5
 * Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
 */

/**
 * 时间复杂度：O(N)
 * 空间复杂度：O(26)
 * @param str 字符串
 * @param k k
 */
export function length_of_longest_substring(str: string, k: number): number {
  let maxLength = 0,
    windowStart = 0,
    maxRepeatLetterCount = 0
  const charFrequency = new Map()

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (!charFrequency.has(rightChar)) {
      charFrequency.set(rightChar, 0)
    }
    charFrequency.set(rightChar, charFrequency.get(rightChar) + 1)
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, charFrequency.get(rightChar))

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      const leftChar = str[windowStart]
      charFrequency.set(leftChar, charFrequency.get(leftChar) - 1)
      windowStart++
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

/**
 * test
 */
console.log(length_of_longest_substring('aabccbb', 2))
