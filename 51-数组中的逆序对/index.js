const walk = (nums, start, end) => {
  if (start >= end) {
    return 0
  }

  const middle = Math.floor((start + end) / 2)
  const leftCount = walk(nums, start, middle)
  const rightCount = walk(nums, middle + 1, end)

  let count = 0
  const copy = new Array(end - start + 1)

  let leftIndex = middle
  let rightIndex = end
  let copyIndex = end - start

  while (copyIndex >= 0) {
    // 如果左边数组已经为空了，那么就直接把右边的数据丢到 copy 去
    if (leftIndex < start) {
      copy[copyIndex--] = nums[rightIndex--]
      continue
    }
    // 如果右边数组已经为空了，那么就直接把左边的数据丢到 copy 去
    if (rightIndex < middle + 1) {
      copy[copyIndex--] = nums[leftIndex--]
      continue
    }
    // 如果左边值大于右边，那么就存在逆序对
    if (nums[leftIndex] > nums[rightIndex]) {
      copy[copyIndex--] = nums[leftIndex--]
      count = count + rightIndex - middle
    } else {
      // 否则不存在逆序对，把右边值丢进 copy 就行了
      copy[copyIndex--] = nums[rightIndex--]
    }
  }

  // 一定注意用 copy 的值去覆盖 nums
  for (let i = start; i <= end; i++) {
    nums[i] = copy[i - start]
  }

  return leftCount + rightCount + count
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  const count = walk(nums, 0, nums.length - 1)
  return count
}
