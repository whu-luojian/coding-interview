/**
 * 题目：
 * Given a string, find the length of the longest substring which has no repeating characters.
 * 给定一个字符串，找出最长的没有重复字符的子串
 * 例子1：
 * Input: String="aabccbb"
 * Output: 3
 * Explanation: The longest substring without any repeating characters is "abc".
 * 例子2：
 * Input: String="abccde"
 * Output: 3
 * Explanation: Longest substrings without any repeating characters are "abc" & "cde".
 */

/**
 * 使用 HashMap 存储字符
 * 时间复杂度：O(N)。外层for循环遍历了所有字符，内层while循环对于每个字符也执行了一次，所有
 * 时间复杂度是O(N + N)，近似等于O(N)
 * 空间复杂度： O(K) where K is the number of distinct characters in the input string
 * @param str 字符串
 */
function no_repeat_substring(str: string): number {
  let maxLength = 0,
    windowStart = 0
  const charMap = new Map()
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    while (charMap.has(rightChar)) {
      const leftChar = str[windowStart]
      charMap.delete(leftChar)
      windowStart++
    }
    charMap.set(rightChar, 1)
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

/**
 * 使用 HashMap 存储字符的索引
 * 时间复杂度：O(N)
 * 空间复杂度： O(K) where K is the number of distinct characters in the input string
 * @param str 字符串
 */
function no_repeat_substring_better(str: string): number {
  let maxLength = 0,
    windowStart = 0
  const charIndexMap = new Map()
  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (charIndexMap.has(rightChar)) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap.get(rightChar) + 1)
    }
    // insert the 'rightChar' into the map
    charIndexMap.set(rightChar, windowEnd)
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
}

/**
 * test
 */
console.log(no_repeat_substring('aabccbb'))
console.log(no_repeat_substring('abccde'))
console.log('----------------------------------')
console.log(no_repeat_substring_better('aabccbb'))
console.log(no_repeat_substring_better('abccde'))
