// 找到第 n 个字符所在的数字是几位数
const parse = (n) => {
  let digitCount = 1
  let total = 9
  let pow = 1

  while (n > total) {
    digitCount = digitCount + 1
    n = n - total
    pow = pow * 10
    total = digitCount * 9 * pow
  }

  return [digitCount, n]
}

var findNthDigit = function (n) {
  if (n <= 9) {
    return n
  }

  const [digitCount, restNum] = parse(n)

  // 是digitCount位数的第几个
  const count = Math.ceil(restNum / digitCount)
  const str = String(Math.pow(10, digitCount - 1) + count - 1)
  const index = (restNum - 1) % digitCount

  return Number(str[index])
}
