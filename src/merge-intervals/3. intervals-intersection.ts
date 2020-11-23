/**
 * 问题：
 * 给定两个间隔列表，找到这两个列表的交集。 每个列表由按其开始时间排序的不相交的间隔组成。
 * examples:
 * Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
   Output: [2, 3], [5, 6], [7, 7]
   Explanation: The output list contains the common intervals between the two lists.
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

const merge = function (intervalsA: Interval[], intervalsB: Interval[]): Interval[] {
  const result = []
  let i = 0
  let j = 0
  while (i < intervalsA.length && j < intervalsB.length) {
    const aOverlapsB =
      intervalsA[i].start >= intervalsB[j].start && intervalsA[i].start <= intervalsB[j].end
    const bOverlapsA =
      intervalsB[j].start >= intervalsA[i].start && intervalsB[j].start <= intervalsA[i].end
    if (aOverlapsB || bOverlapsA) {
      result.push(
        new Interval(
          Math.max(intervalsA[i].start, intervalsB[j].start),
          Math.min(intervalsA[i].end, intervalsB[j].end)
        )
      )
    }
    if (intervalsA[i].end < intervalsB[j].end) {
      i++
    } else {
      j++
    }
  }
  return result
}

const intersectionIntervals = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
)

let result = ''
for (let i = 0; i < intersectionIntervals.length; i++) {
  result += intersectionIntervals[i].getInterval() + ' '
}
console.log(`intersection intervals: ${result}`)
