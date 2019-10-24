# 用两个栈实现队列

用两个栈实现一个队列，分别完成在队列尾部插入节点和队列头部删除节点的功能。

## 解法

栈是先进后出，队列是先进先出，如何用两个栈来实现一个队列的功能？

思路：在插入新值的时候，如果能把这个新值放在栈底部，就能实现先进先出了。

代码如下：

```js
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
```
