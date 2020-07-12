/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  // 先排序
  const sorted = [...nums].sort((a, b) => a - b)
  // 然后看 0 有多少个
  const zeroCount = sorted.lastIndexOf(0) + 1
  const restNums = sorted.slice(zeroCount)

  // 然后看数组中两两相邻两个数之间间隔多大
  let gap = 0
  for (let i = 1; i < restNums.length; i++) {
    if (restNums[i] === restNums[i - 1]) {
      return false
    }
    gap += restNums[i] - restNums[i - 1] - 1
  }
  // 看 0 能不能填满
  return gap <= zeroCount
}
