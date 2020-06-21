/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  const result = []

  // 假设这 n 个数加起来等于 target (n >= 2)
  // a,a+1,a+2,...,a+n-1
  // 那么有 (a + a + n - 1) * n = 2 * target
  // 那么有 a = target/n - (n - 1)/2

  const maxN = Math.floor((2 * target) / 3)
  let n = 2
  while (n <= maxN) {
    const a = target / n - (n - 1) / 2
    if (a <= 0) {
      break
    }
    if (Number.isInteger(a)) {
      const list = []
      for (let i = a; i <= a + n - 1; i++) {
        list.push(i)
      }
      result.unshift(list)
    }
    n++
  }

  return result
}
