const findMinInOrder = (arr, index1, index2) => {
  let min = arr[index1]
  let i = index1 + 1
  for (i; i <= index2; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

export const parseMin = arr => {
  const { length } = arr
  if (!length) {
    return undefined
  }
  if (length === 1) {
    return arr[0]
  }

  let index1 = 0
  let index2 = length - 1
  let indexMid = index1

  while (arr[index1] >= arr[index2]) {
    if (index2 - index1 === 1) {
      indexMid = index2
      break
    }

    indexMid = Math.floor((index1 + index2) / 2)

    // 如果三个值都相等，那么无法判断是取左边还是取右边，所以直接用顺序查找最小值
    if (arr[index1] === arr[index2] && arr[indexMid] === arr[index1]) {
      return findMinInOrder(arr, index1, index2)
    }

    // 如果 arr[index1] <= arr[indexMid]，说明 index1 到 indexMid 之间的数组都是递增的，就不用管
    if (arr[index1] <= arr[indexMid]) {
      index1 = indexMid
    } else {
      index2 = indexMid
    }
  }

  return arr[indexMid]
}
