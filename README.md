# coding-interview

> the notes of [Grokking the Coding Interview: Patterns for Coding Questions](https://www.educative.io/courses/grokking-the-coding-interview)

## 运行
1. 按照 `ts-node`, `esm`
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
