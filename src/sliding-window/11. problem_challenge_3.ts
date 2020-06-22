/**
 * 题目：Smallest Window containing Substring
 * Given a string and a pattern,
 * find the smallest substring in the given string which has all the characters of the given pattern.
 * 例子1：
 * Input: String="aabdec", Pattern="abc"
 * Output: "abdec"
 * Explanation: The smallest substring having all characters of the pattern is "abdec"
 * 例子2：
 * Input: String="adcad", Pattern="abc"
 * Output: ""
 * Explanation: No substring in the given string has all characters of the pattern.
 */

/**
 * 1. We will keep a running count of every matching instance of a character.
 * 2. Whenever we have matched all the characters, we will try to shrink the window from the beginning, keeping track of the smallest substring that has all the matching characters.
 * 3. We will stop the shrinking process as soon as we remove a matched character from the sliding window. One thing to note here is that we could have redundant matching characters, e.g., we might have two ‘a’ in the sliding window when we only need one ‘a’. In that case, when we encounter the first ‘a’, we will simply shrink the window without decrementing the matched count. We will decrement the matched count when the second ‘a’ goes out of the window.
 * @param str 字符串
 * @param pattern 模式字符串
 */
export function find_substring(str: string, pattern: string): string {
  let windowStart = 0,
    minLength = Infinity,
    result = '',
    matched = 0 //已匹配完成的字符个数
  const charFrequency = new Map()

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i]
    if (charFrequency.has(char)) {
      charFrequency.set(char, charFrequency.get(char) + 1)
    } else {
      charFrequency.set(char, 1)
    }
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (charFrequency.has(rightChar)) {
      charFrequency.set(rightChar, charFrequency.get(rightChar) - 1)
      if (charFrequency.get(rightChar) === 0) {
        matched++
      }
    }

    while (matched === charFrequency.size) {
      if (windowEnd - windowStart + 1 < minLength) {
        minLength = windowEnd - windowStart + 1
        result = str.substring(windowStart, windowEnd + 1)
      }
      const leftChar = str[windowStart]
      if (charFrequency.has(leftChar)) {
        if (charFrequency.get(leftChar) === 0) {
          matched--
        }
        charFrequency.set(leftChar, charFrequency.get(leftChar) + 1)
      }
      windowStart++
    }
  }
  return result
}

/**
 * test
 */
console.log(find_substring('aabdec', 'abc'))
console.log(find_substring('adcad', 'abc'))
