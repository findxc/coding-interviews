## 机器人的运动范围

有一个 m 行 n 列的方格，机器人从 [0, 0] 开始移动，每次可以上/下/左/右移动一格，但不能进入坐标的各个数字之和大于 k 的格子，比如 [12, 13] 的各位之和是 1 + 2 + 1 + 3 = 7。请问机器人能到达多少个格子？

### 解法

从 [0, 0] 开始，选择上下左右一个方向走一格，看这个格子是否满足要求，满足的话，就从当前格子继续上下左右走。

代码如下：

```js
// 上下左右的偏移量
const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]

const calculateK = (x, y) => {
  return `${x}${y}`.split('').reduce((total, current) => {
    return total + Number(current)
  }, 0)
}

const isPositionOk = (x, y, board, m, n, k) => {
  // 考虑边界
  if (x < 0 || y < 0 || x > m - 1 || y > n - 1) {
    return false
  }
  // 已经计算过的位置不用再考虑
  if (board[x] && board[x][y] !== undefined) {
    return false
  }
  // 大于 k 的不用考虑
  if (calculateK(x, y) > k) {
    return false
  }
  return true
}

export default (m, n, k) => {
  let count = 0
  const board = []

  const run = (x, y) => {
    const positionOk = isPositionOk(x, y, board, m, n, k)
    if (!board[x]) {
      board[x] = []
    }
    board[x][y] = positionOk
    if (positionOk) {
      count++
      for (let d of directions) {
        run(x + d[0], y + d[1])
      }
    }
  }

  run(0, 0)

  return count
}
```
