## 顺时针打印矩阵

输入一个二维矩阵，从外向里以顺时针的顺序依次打印出每一个数字。

```js
const arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]

// 依次打印 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10
```

### 解法

代码如下：

```js
const printOneCircle = (arr, rowLength, columnLength, index) => {
  for (let i = index; i <= columnLength - index - 1; i++) {
    console.log(arr[index][i])
  }

  for (let i = index + 1; i <= rowLength - index - 1; i++) {
    console.log(arr[i][columnLength - index - 1])
  }

  for (let i = columnLength - index - 2; i >= index; i--) {
    console.log(arr[rowLength - index - 1][i])
  }

  for (let i = rowLength - index - 2; i >= index + 1; i--) {
    console.log(arr[i][index])
  }
}

export default arr => {
  if (!arr.length) {
    return
  }

  const rowLength = arr.length
  const columnLength = arr[0].length

  const count = Math.min(Math.ceil(rowLength / 2), Math.ceil(columnLength / 2))

  for (let i = 0; i < count; i++) {
    printOneCircle(arr, rowLength, columnLength, i)
  }
}
```
