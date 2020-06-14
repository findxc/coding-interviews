/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums, start = 0, end = nums.length - 1) {
  const middle = Math.floor((start + end) / 2)
  if (nums[middle] === middle) {
    if (middle === end) {
      return middle + 1
    }
    return missingNumber(nums, middle + 1, end)
  }
  if (middle === start) {
    return middle
  }
  return missingNumber(nums, start, middle - 1)
}
