export default class Stack {
  constructor() {
    this.length = 0
    this.dataArr = []
    this.minArr = []
  }

  push(num) {
    const currentMin = this.min()

    this.length++
    this.dataArr.push(num)
    this.minArr.push(
      currentMin === undefined || num <= currentMin ? num : currentMin
    )
  }

  pop() {
    if (!this.length) {
      return undefined
    }

    this.length--
    this.minArr.pop()
    return this.dataArr.pop()
  }

  min() {
    return this.length ? this.minArr[this.length - 1] : undefined
  }
}
