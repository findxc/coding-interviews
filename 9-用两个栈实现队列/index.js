class Stack {
  constructor() {
    this.arr = []
  }

  push(value) {
    this.arr.push(value)
    return value
  }

  pop() {
    if (this.arr.length) {
      return this.arr.pop()
    }
    return undefined
  }
}

// 先进先出
// 在插入节点时，把这个节点放在栈的最底部，这样在删除节点时就可以先进先出啦
export class Queue {
  constructor() {
    this.stack = new Stack()
    this.tmpStack = new Stack()
  }

  appendTail(value) {
    let node
    while ((node = this.stack.pop())) {
      this.tmpStack.push(node)
    }
    this.stack.push(value)
    while ((node = this.tmpStack.pop())) {
      this.stack.push(node)
    }
    return value
  }

  deleteHead() {
    return this.stack.pop()
  }
}
