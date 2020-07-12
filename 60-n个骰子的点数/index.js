/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function (n) {
  const result = new Array(6 * n + 1).fill(0)

  for (let i = 1; i <= 6; i++) {
    result[i] = 1
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 6 * i; j >= i; j--) {
      let resultJ = 0
      for (let k = 1; k <= 6; k++) {
        // 比如 i = 3 时，不应该去管 result[0]，result[1]
        if (j - k < i - 1) {
          break
        }
        resultJ += result[j - k]
      }
      result[j] = resultJ
    }
  }

  const total = Math.pow(6, n)
  return result.slice(n, 6 * n + 1).map((x) => x / total)
}
