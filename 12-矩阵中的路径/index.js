// 上下左右的偏移量
const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]

// board: 二维字符数组
// maxX: 二维字符数组最大的 x 值
// maxY: 二维字符数组最大的 y 值
// flagBoard: 尺寸与 board 一致，用于标记某个位置上的值是否已经占用
// word: 需要匹配的字符串
// wordIndex: 当前需要匹配的 word 的 index
// x, y: 当前在遍历的格子的 x, y
const searchWord = (board, maxX, maxY, flagBoard, word, wordIndex, x, y) => {
  // 当前的 x, y 对应的值是否和 word 对应 index 的值一致
  const isMatch = board[x][y] === word[wordIndex]

  // 最后一个值的时候
  if (wordIndex === word.length - 1) {
    return isMatch
  }

  // 如果当前的值是匹配的
  if (isMatch) {
    // 先把 flagBoard 对应位置设为 true
    flagBoard[x][y] = true

    // 然后看当前位置的下一个位置是否能匹配
    for (let d of directions) {
      const nextX = x + d[0]
      const nextY = y + d[1]

      // 如果有下一个值也匹配的，就返回 true
      if (
        nextX >= 0 &&
        nextX <= maxX &&
        nextY >= 0 &&
        nextY <= maxY &&
        // 注意这里要判断 nextX， nextY 之前没有占用过
        !flagBoard[nextX][nextY] &&
        searchWord(
          board,
          maxX,
          maxY,
          flagBoard,
          word,
          // 索引 + 1，表示去匹配下一个字符
          wordIndex + 1,
          nextX,
          nextY
        )
      ) {
        return true
      }
    }

    // 代码能执行到这里，说明上面的 return true 没执行到，也就是在 x, y 那里走不通，所以这里重置为 false
    flagBoard[x][y] = false
  }

  return false
}

export const exist = (board, word) => {
  // 校验边界
  if (!board.length || !board[0] || !board[0].length) {
    return false
  }

  const maxX = board.length - 1
  const maxY = board[0].length - 1

  let x
  let y

  // flagBoard 用于保存哪些位置是已经占用了的，初始值都是 false
  let flagBoard = new Array(board.length)
  for (x = 0; x <= maxX; x++) {
    flagBoard[x] = new Array(maxY + 1).fill(false)
  }

  for (x = 0; x <= maxX; x++) {
    for (y = 0; y <= maxY; y++) {
      // 依次遍历，任意一条路径能走通就返回 true
      if (searchWord(board, maxX, maxY, flagBoard, word, 0, x, y)) {
        return true
      }
    }
  }

  // 没有能走通的，所以返回 false
  return false
}
