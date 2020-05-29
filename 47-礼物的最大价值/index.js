/**
 * @param {number[][]} grid
 * @return {number}
 */
// m * n 的 grid
// f(i, j) = max(f(i - 1, j), f(i, j - 1))) + grid[i][j]
var maxValue = function (grid) {
  if (!grid.length) {
    return 0
  }

  const m = grid.length
  const n = grid[0].length

  const counts = new Array(n)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      counts[j] = Math.max(counts[j] || 0, counts[j - 1] || 0) + grid[i][j]
    }
  }

  return counts[n - 1]
}

const arr = [
  [1, 10, 3, 8],
  [12, 2, 9, 6],
  [5, 7, 4, 11],
  [3, 7, 16, 5],
]

console.log(maxValue(arr))
