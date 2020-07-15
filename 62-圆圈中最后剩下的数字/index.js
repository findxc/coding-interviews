/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let index = 0
  for (let i = 2; i <= n; i++) {
    index = (index + m) % i
  }
  return index
}
