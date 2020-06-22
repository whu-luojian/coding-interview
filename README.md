# coding-interview

> the notes of [Grokking the Coding Interview: Patterns for Coding Questions](https://www.educative.io/courses/grokking-the-coding-interview)

## 运行
1. install `ts-node`, `esm`
```
yarn add ts-node esm -D
```
2. vs code 新增调试配置（launch.json）
```
{
  "type": "node",
  "request": "launch",
  "name": "ts-node",
  "runtimeArgs": [
      "-r",
      "ts-node/register",
      "-r",
      "esm"
  ],
  "args": [
    "${relativeFile}"
  ]
}
```
3. F5 运行调试

## 目录

### sliding window

1. [introduction](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/1.%20introduction.ts)
2. [Maximum Sum Subarray of Size K (easy)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/2.%20maximum_sum_subarray_of_size_k.ts)
3. [Smallest Subarray with a given sum (easy)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/3.%20smallest_subarray_with_a_given_sum.ts)
4. [Longest Substring with K Distinct Characters (medium)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/4.%20longest_substring_with_k_distinct_characters.ts)
5. [Fruits into Baskets (medium)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/5.%20fruits-into-baskets.ts)
6. [No-repeat Substring (hard)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/6.%20no-repeat-substring.ts)
7. [Longest Substring with Same Letters after Replacement (hard)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/7.%20longest_substring_with_same_letters.ts)
8. [Longest Subarray with Ones after Replacement (hard)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/8.%20longest_subarray_with_ones_after_replacement.ts)
9. [Problem Challenge 1: Permutation in a String (hard)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/9.%20problem_challenge_1.ts)
10. [Problem Challenge 2: String Anagrams (hard)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/10.%20problem_challenge_2.ts)
11. [Problem Challenge 3: Smallest Window containing Substring (hard)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/11.%20problem_challenge_3.ts)
12. [Problem Challenge 4: Words Concatenation (hard)](https://github.com/whu-luojian/coding-interview/blob/master/src/sliding-window/12.%20problem_challenge_4.ts)
