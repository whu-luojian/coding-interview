/**
 * 问题：
 * 给定间隔列表，合并所有重叠的间隔以生成仅具有互斥间隔的列表。
 * example1:
 *  Intervals: [[1,4], [2,5], [7,9]]
    Output: [[1,5], [7,9]]
    Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
    one [1,5].
 * example2:
 *  Intervals: [[6,7], [2,4], [5,9]]
    Output: [[2,4], [5,9]]
    Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].
 */

export class Interval {
  public start: number
  public end: number
  constructor(start: number, end: number) {
    this.start = start
    this.end = end
  }

  public getInterval(): string {
    return `[${this.start}, ${this.end}]`
  }
}

const merge = function (intervals: Interval[]): Interval[] {
  if (intervals.length < 2) {
    return intervals
  }
  // 1. 根据 start 排序
  intervals.sort((a, b) => a.start - b.start)
  const mergedIntervals = []
  let start = intervals[0].start,
    end = intervals[0].end
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i]
    if (interval.start <= end) {
      end = Math.max(interval.end, end) // 存在重叠，合并
    } else {
      mergedIntervals.push(new Interval(start, end))
      start = interval.start
      end = interval.end
    }
  }
  mergedIntervals.push(new Interval(start, end))
  return mergedIntervals
}

const mergedIntervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)])
let result = ''
for (let i = 0; i < mergedIntervals.length; i++) {
  result += mergedIntervals[i].getInterval() + ' '
}
console.log(`Merged intervals: ${result}`)
