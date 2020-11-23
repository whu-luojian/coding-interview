/**
 * 问题：
 * 给定按其开始时间排序的非重叠间隔的列表，请在正确的位置插入给定间隔，并合并所有必需的间隔以生成仅具有互斥间隔的列表。
 * examples
 * Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
   Output: [[1,3], [4,7], [8,12]]
   Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
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

const insert = function (intervals: Interval[], newInterval: Interval): Interval[] {
  const merged = []
  let i = 0
  while (i < intervals.length && intervals[i].end < newInterval.start) {
    merged.push(intervals[i])
    i++
  }

  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval.start = Math.min(intervals[i].start, newInterval.start)
    newInterval.end = Math.max(intervals[i].end, newInterval.end)
    i++
  }

  merged.push(newInterval)

  if (i < intervals.length) {
    merged.push(intervals[i])
    i++
  }
  return merged
}

const mergedIntervals = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
)

let result = ''
for (let i = 0; i < mergedIntervals.length; i++) {
  result += mergedIntervals[i].getInterval() + ' '
}
console.log(`insert intervals: ${result}`)
