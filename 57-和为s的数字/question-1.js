/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let i = 0
  let j = nums.length - 1
  let result = []
  while (i < j) {
    const sum = nums[i] + nums[j]
    if (sum === target) {
      result = [nums[i], nums[j]]
      break
    } else if (sum > target) {
      j--
    } else {
      i++
    }
  }
  return result
}
