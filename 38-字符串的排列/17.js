const digitMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

var letterCombinations = function (str) {
  if (!str) {
    return []
  }

  const digits = str.split('')

  const list = []

  let tmp = []

  const walk = (index) => {
    if (index === digits.length) {
      list.push(tmp.join(''))
      return
    }
    digitMap[digits[index]].forEach((item) => {
      tmp[index] = item
      walk(index + 1)
    })
  }

  walk(0)

  return list
}
