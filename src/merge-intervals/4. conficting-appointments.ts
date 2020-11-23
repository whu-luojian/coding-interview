/**
 * 问题：
 * 给定一系列代表“ N”个约会的间隔，找出一个人是否可以参加所有约会。
 * examples:
 * Appointments: [[6,7], [2,4], [8,12]]
   Output: true
   Explanation: None of the appointments overlap, therefore a person can attend all of them.
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

const canAttendAllAppointments = function (intervals: Interval[]): boolean {
  intervals.sort((a, b) => a.start - b.start)
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false
    }
  }
  return true
}

console.log(
  `Can attend all appointments: ${canAttendAllAppointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9)
  ])}`
)

console.log(
  `Can attend all appointments: ${canAttendAllAppointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12)
  ])}`
)
