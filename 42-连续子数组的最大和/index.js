var maxSubArray = function (nums) {
  let prev = 0
  let max = nums[0]

  nums.forEach((num) => {
    if (prev <= 0) {
      prev = num
    } else {
      prev = prev + num
    }

    if (max < prev) {
      max = prev
    }
  })

  return max
}
