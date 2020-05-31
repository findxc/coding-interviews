/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 已经找到的丑数们
  const uglyNums = [1]

  // 乘以 2/3/5 后就大于当前最大丑数的数的 index
  let twoIndex = 0
  let threeIndex = 0
  let fiveIndex = 0

  let i = 1
  while (i < n) {
    // 下一个丑数其实就是这三个数的最小值
    const nextUglyNum = Math.min(
      2 * uglyNums[twoIndex],
      3 * uglyNums[threeIndex],
      5 * uglyNums[fiveIndex]
    )
    uglyNums.push(nextUglyNum)

    // 更新一下 twoIndex/threeIndex/fiveIndex 的值
    while (2 * uglyNums[twoIndex] <= nextUglyNum) {
      twoIndex++
    }
    while (3 * uglyNums[threeIndex] <= nextUglyNum) {
      threeIndex++
    }
    while (5 * uglyNums[fiveIndex] <= nextUglyNum) {
      fiveIndex++
    }

    i++
  }

  return uglyNums.pop()
}
