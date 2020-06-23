/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let i = 0
  let j = 0

  const results = []
  // 维护一个数组，按从大到小的顺序存着 i 到 j 范围内可能的最大值的索引
  const maxNumIndexs = []

  while (j < k - 1) {
    // 如果当前值比 maxNumIndexs 尾巴的值大，那就把尾巴去掉，然后把当前值 push 进去，因为在 i 到 j 范围内，比当前值要小的尾巴值不可能会是范围内最大值
    while (
      maxNumIndexs.length &&
      nums[j] >= nums[maxNumIndexs[maxNumIndexs.length - 1]]
    ) {
      maxNumIndexs.pop()
    }
    maxNumIndexs.push(j)
    j++
  }

  const maxJ = nums.length - 1
  while (j <= maxJ) {
    // 一样的先把尾巴处理掉
    while (
      maxNumIndexs.length &&
      nums[j] >= nums[maxNumIndexs[maxNumIndexs.length - 1]]
    ) {
      maxNumIndexs.pop()
    }
    maxNumIndexs.push(j)

    // 然后看头部的值有没有已经不在范围内的，有的话就去掉
    while (maxNumIndexs.length && maxNumIndexs[0] < i) {
      maxNumIndexs.shift()
    }

    // 然后范围内的最大值就是头部的值咯
    results.push(nums[maxNumIndexs[0]])
    i++
    j++
  }

  return results
}
