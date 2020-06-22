/**
 * 题目：String Anagrams
 * Given a string and a pattern, find all anagrams of the pattern in the given string.
 * Write a function to return a list of starting indices of the anagrams of the pattern in the given string.
 * Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams: abc、acb、bac、bca、cab、cba.
 * 例子1：
 * Input: String="ppqp", Pattern="pq"
 * Output: [1, 2]
 * Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
 * 例子2：
 * Input: String="abbcabc", Pattern="abc"
 * Output: [2, 3, 4]
 * Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
 */

/**
 * 时间复杂度：O(N + M)，N为str的长度，M为pattern的长度
 * 空间复杂度：最坏情况O(M),M为pattern的长度
 * @param str 字符串
 * @param pattern 模式字符串
 */
export function find_string_anagrams(str: string, pattern: string): number[] {
  let windowStart = 0,
    matched = 0 //已匹配完成的字符个数
  const charFrequency = new Map(),
    result = []

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

    if (matched === charFrequency.size) {
      result.push(windowStart)
    }

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart]
      windowStart++
      if (charFrequency.has(leftChar)) {
        if (charFrequency.get(leftChar) === 0) {
          matched--
        }
        charFrequency.set(leftChar, charFrequency.get(leftChar) + 1)
      }
    }
  }
  return result
}

/**
 * test
 */
console.log(find_string_anagrams('ppqp', 'pq'))
console.log(find_string_anagrams('abbcabc', 'abc'))
