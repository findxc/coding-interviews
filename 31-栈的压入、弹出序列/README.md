## 栈的压入、弹出序列

输入两个数组，第一个数组为栈的压入顺序，第二个数组为栈的弹出顺序。栈的所有数字都不相等。判断弹出顺序是否可能。

比如压入顺序是 `[1, 2, 3, 4, 5]` ，那么弹出顺序 `[4, 5, 3, 2, 1]` 是有可能的，在压入 4 之后马上弹出，然后再压入 5 然后再弹出，然后再依次弹出 3、2、1 即可。但是弹出顺序 `[4, 3, 5, 2, 1]` 是不可能的。

### 解法

以压入顺序 `[1, 2, 3, 4, 5]` 和弹出顺序 `[3, 2, 5, 4, 1]` 来举例。

表格第三列为一个辅助数组。

| [1, 2, 3, 4, 5]                         | [3, 2, 5, 4, 1]                              | []                            |
| --------------------------------------- | -------------------------------------------- | ----------------------------- |
| 弹出 5                                  | 弹出 1 ， 1 和 5 不等，所以把 1 放入辅助数组 | [1]                           |
|                                         | 弹出 4 ，还是不等，把 4 也放入辅助数组       | [1, 4]                        |
|                                         | 弹出 5 ，相等了                              |                               |
| 因为上一次相等了，所以这里可以弹出 4 了 | 由于辅助数组弹出 4 就相等了，所以这里不动    | 弹出 4 ，相等，这里就变为 [1] |
| 弹出 3                                  | 弹出 2 ，不等，把 2 放入辅助数组             | [1, 2]                        |
|                                         | 弹出 3 ，相等了                              | [1, 2]                        |
| 弹出 2                                  | 这里已经是空数组了，不用管了                 | 弹出 2 ，相等                 |
| 弹出 1                                  |                                              | 弹出 1 ，相等，结束了         |

代码如下：

```js
export default (pushList, popList) => {
  // 首先两个数组的长度一定要相等，不相等直接返回 false
  if (pushList.length !== popList.length) {
    return false
  }

  let tempList = []
  let result = true

  while (pushList.length && result) {
    let p1 = pushList.pop()
    let p2 = popList.pop()

    // 如果说弹出的数字正好相等，那么就继续下一轮循环
    if (p1 === p2) {
      continue
    }

    // 当两个数字不相等的时候，先检查下临时数组弹出的数字和 p1 是否相等，如果相等的话也可以直接进入下一轮循环
    if (tempList.length) {
      let t = tempList.pop()
      if (t === p1) {
        popList.push(p2)
        continue
      } else {
        tempList.push(t)
      }
    }

    // 不断从 popList 中 pop 值出来进行对比，并把不相等时候的值存入 tempList 中，如果 popList 没有值了就从 tempList 中取值出来对比
    while (p1 !== p2 && result) {
      if (popList.length) {
        tempList.push(p2)
        p2 = popList.pop()
      } else if (tempList.length) {
        p2 = tempList.pop()
      } else {
        result = false
      }
    }
  }

  return result
}
```
