/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const digits = new Array(33).fill(0)

  nums.forEach((num) => {
    // 把数字转成二进制
    const list = Math.abs(num).toString(2).split('')
    const listLength = list.length
    // 然后把每个位置的数字加起来
    list.forEach((x, index) => {
      const indexInDigits = 33 - listLength + index
      digits[indexInDigits] = digits[indexInDigits] + Number(x)
    })
    if (num < 0) {
      digits[0] = digits[0] + 1
    }
  })

  const formaredDigits = digits.map((d) => d % 3)

  const flag = formaredDigits[0] === 1 ? -1 : 1
  return flag * parseInt(formaredDigits.slice(1).join(''), 2)
}
