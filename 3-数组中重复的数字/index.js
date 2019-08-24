export const findRepeatNum1 = numbers => {
  const numMap = {}
  const length = numbers.length
  let repeatNum = -1
  let i = 0

  while (i < length && repeatNum === -1) {
    const num = numbers[i]
    if (num in numMap) {
      repeatNum = num
    } else {
      numMap[num] = 1
      i++
    }
  }

  return repeatNum
}

export const findRepeatNum2 = numbers => {
  const length = numbers.length
  let repeatNum = -1
  let i = 0

  while (i < length && repeatNum === -1) {
    while (numbers[i] !== i) {
      const tmp = numbers[i]
      if (numbers[i] === numbers[tmp]) {
        repeatNum = numbers[i]
        break
      }
      numbers[i] = numbers[tmp]
      numbers[tmp] = tmp
    }
    i++
  }

  return repeatNum
}
