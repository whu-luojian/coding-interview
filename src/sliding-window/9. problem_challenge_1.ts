/**
 * 题目：字符串变换
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.
 * 给定一个字符串和模式，判断该字符串是否包含模式的某一变换
 * 变化指的就是排列组合，For example, “abc” has the following six permutations: abc、acb、bac、bca、cab、cba
 * If a string has ‘n’ distinct characters it will have n! permutations.
 * 例子1：
 * Input: String="oidbcaf", Pattern="abc"
 * Output: true
 * Explanation: The string contains "bca" which is a permutation of the given pattern.
 * 例子2：
 * Input: String="odicf", Pattern="dc"
 * Output: false
 * Explanation: No permutation of the pattern is present in the given string as a substring.
 */

/**
 * 1. Create a HashMap to calculate the frequencies of all characters in the pattern.
 * 2. Iterate through the string, adding one character at a time in the sliding window.
 * 3. If the character being added matches a character in the HashMap, decrement its frequency in the map. If the character frequency becomes zero, we got a complete match.
 * 4. If at any time, the number of characters matched is equal to the number of distinct characters in the pattern (i.e., total characters in the HashMap), we have gotten our required permutation.
 * 5. If the window size is greater than the length of the pattern, shrink the window to make it equal to the size of the pattern. At the same time, if the character going out was part of the pattern, put it back in the frequency HashMap.
 * @param str 字符串
 * @param pattern pattern
 */
export function find_permutation(str: string, pattern: string): boolean {
  let windowStart = 0,
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

    if (matched === charFrequency.size) {
      return true
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
  return false
}

/**
 * test
 */
console.log(find_permutation('oidbcaf', 'abc'))
console.log(find_permutation('odicf', 'dc'))
