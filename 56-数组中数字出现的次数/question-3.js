/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // 所有值的异或结果
  const totalXor = nums.reduce((total, current) => {
    return total ^ current
  })

  // 结果和它相反数的与操作，这个值的二进制值中只包含一个 1，其余都是 0
  const special = totalXor & -totalXor

  let resultA = undefined
  let resultB = undefined

  nums.forEach((num) => {
    // 根据每个数和 special 与操作的结果，将数组分成两部分
    if (num & special) {
      resultA = resultA ^ num
    } else {
      resultB = resultB ^ num
    }
  })

  return [resultA, resultB]
}
