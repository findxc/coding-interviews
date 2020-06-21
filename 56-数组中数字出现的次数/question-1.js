/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const result = nums.reduce((total, current) => {
    return total ^ current
  })
  return result
}
