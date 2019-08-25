export const replaceSpace = arr => {
  const length = arr.length
  let spaceCount = 0
  for (let i = 0; i <= length - 1; i++) {
    if (arr[i] === ' ') {
      spaceCount++
    }
  }

  const newLength = length + spaceCount * 2
  let arrIndex = newLength - 1

  for (let i = length - 1; i >= 0; i--) {
    if (arr[i] === ' ') {
      arr[arrIndex--] = '0'
      arr[arrIndex--] = '2'
      arr[arrIndex--] = '%'
    } else {
      arr[arrIndex--] = arr[i]
    }
  }

  return arr
}
