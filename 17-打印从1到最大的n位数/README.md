## 打印从 1 到最大的 n 位数

按顺序打印从 1 到最大的 n 位数，比如 n 为 3 的时候，就依次打印 1、2、3，一直到 999 。

### 解法

这里需要考虑 n 特别大的情况，也就是 n 大于最大的整数的情况。一般可以用字符串来表示大数。

并且这里的打印出所有数，其实可以用全排列方法来解决，也就是 n 位数的每一位都是 0 到 9 的情况。

代码如下：

```js
const print = arr => {
  const index = arr.findIndex(x => x !== 0)
  if (index === -1) {
    return
  }

  const str = arr.slice(index).join('')
  console.log(str)
}

export default n => {
  if (n <= 0) {
    return
  }

  const run = (i, numArr) => {
    if (i > n) {
      return
    }

    for (let j = i === 1 ? 0 : 1; j <= 9; j++) {
      const arr = [...numArr]
      arr[i - 1] = j
      print(arr)
      run(i + 1, arr)
    }
  }

  run(1, new Array(n).fill(0))
}
```
