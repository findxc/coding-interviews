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
