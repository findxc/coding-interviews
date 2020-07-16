/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0
  }

  let min = prices[0]
  let profit = prices[1] > min ? prices[1] - min : 0

  for (let i = 2; i < prices.length; i++) {
    if (prices[i - 1] < min) {
      min = prices[i - 1]
    }

    const diff = prices[i] - min
    if (diff > profit) {
      profit = diff
    }
  }

  return profit
}
