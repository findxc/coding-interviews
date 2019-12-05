## 包含 min 函数的栈

定义一个栈，有 push、pop、min 三个函数，时间复杂度均为 1 。

### 解法

用一个辅助栈去存最小值，这样获取 min 的时间复杂度也可以是 1 。

代码如下：

```js
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
```
