class MaxQueue {
  constructor() {
    this.list = []
    this.maxs = []
  }

  max_value() {
    return this.maxs.length ? this.maxs[0] : -1
  }

  // 注意，如果新的值小于或者等于队尾的值，都需要 push 进去
  // 这样在 shift 的时候，即使有两个值是一样的，也一样可以直接 shift
  push_back(value) {
    this.list.push(value)
    while (this.maxs.length && this.maxs[this.maxs.length - 1] < value) {
      this.maxs.pop()
    }
    this.maxs.push(value)
  }

  pop_front() {
    if (!this.list.length) {
      return -1
    }
    const value = this.list.shift()
    if (value === this.maxs[0]) {
      this.maxs.shift()
    }
    return value
  }
}
