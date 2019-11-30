export default arr => {
  const { length } = arr
  if ([0, 1].includes(length)) {
    return arr
  }

  let startIndex = 0
  let endIndex = length - 1

  while (startIndex < endIndex) {
    // num & 1 为 1 表示 num 为奇数。如果是奇数的话，就一直从前往后移
    while (arr[startIndex] & 1) {
      startIndex++
    }
    // num & 1 为 0 表示 num 为偶数。如果是偶数的话，就一直从后往前移
    while ((arr[endIndex] & 1) === 0) {
      endIndex--
    }
    // 交换位置
    if (startIndex < endIndex) {
      const tmp = arr[startIndex]
      arr[startIndex] = arr[endIndex]
      arr[endIndex] = tmp
    }
  }

  return arr
}
