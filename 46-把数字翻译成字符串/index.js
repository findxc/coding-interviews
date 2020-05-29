/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const numStr = String(num)
  const { length } = numStr
  const counts = new Array(length)

  counts[length - 1] = 1

  let i
  for (i = length - 2; i >= 0; i--) {
    counts[i] = counts[i + 1]

    const value = Number(`${numStr[i]}${numStr[i + 1]}`)
    // 注意只有这种情况，才会需要额外加
    if (value >= 10 && value <= 25) {
      counts[i] = counts[i] + (counts[i + 2] || 1)
    }
  }

  return counts[0]
}
