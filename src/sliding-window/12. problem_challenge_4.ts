/**
 * 题目：Words Concatenation
 * Given a string and a list of words, find all the starting indices of substrings in the given string
 * that are a concatenation of all the given words exactly once without any overlapping of words.
 * It is given that all words are of the same length.
 * 例子1：
 * Input: String="catfoxcat", Words=["cat", "fox"]
 * Output: [0, 3]
 * Explanation: The two substring containing both the words are "catfox" & "foxcat".
 * 例子2：
 * Input: String="catcatfoxfox", Words=["cat", "fox"]
 * Output: [3]
 * Explanation: The only substring containing both the words is "catfox".
 */

/**
 * 1. Keep the frequency of every word in a HashMap.
 * 2. Starting from every index in the string, try to match all the words.
 * 3. In each iteration, keep track of all the words that we have already seen in another HashMap.
 * 4. If a word is not found or has a higher frequency than required, we can move on to the next character in the string.
 * 5. Store the index if we have found all the words.
 * 时间复杂度：O(N * M * Len) where ‘N’ is the number of characters in the given string, ‘M’ is the total number of words, and ‘Len’ is the length of a word.
 * 空间复杂度：O(N + M) In the worst case, we need O(N) space for the resulting list and O(M) space to store the words,
 * @param str 字符串
 * @param words 匹配的字符串数组
 */
export function find_word_concatention(str: string, words: string[]): number[] {
  if (words.length === 0 || words[0].length === 0) {
    return []
  }
  const wordMap = new Map()
  words.forEach((word) => {
    if (!wordMap.has(word)) {
      wordMap.set(word, 1)
    } else {
      wordMap.set(word, wordMap.get(word) + 1)
    }
  })

  const resultIndices = [],
    wordCount = words.length,
    wordLength = words[0].length
  for (let i = 0; i < str.length - wordCount * wordLength + 1; i++) {
    const wordsSeen = new Map()
    for (let j = 0; j < wordCount; j++) {
      const next_word_index = i + j * wordLength,
        word = str.substring(next_word_index, next_word_index + wordLength)

      if (!wordMap.has(word)) {
        break
      }

      if (!wordsSeen.has(word)) {
        wordsSeen.set(word, 0)
      }
      wordsSeen.set(word, wordsSeen.get(word) + 1)

      if (wordsSeen.get(word) > (wordMap.get(word) || 0)) {
        break
      }

      if (j + 1 === wordCount) {
        resultIndices.push(i)
      }
    }
  }
  return resultIndices
}

/**
 * test
 */
console.log(find_word_concatention('catfoxcat', ['cat', 'fox']))
console.log(find_word_concatention('catcatfoxfox', ['cat', 'fox']))
