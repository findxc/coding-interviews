const swap = (arr, i, j) => {
  if (i === j) {
    return
  }
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

// 把小于 arr[end] 的值放在前面，把大于 arr[end] 的值放在后面
const sort = (arr, start, end) => {
  let i = start
  let j = start

  const value = arr[end]

  for (j; j < end; j++) {
    if (arr[j] < value) {
      if (i !== j) {
        swap(arr, i, j)
      }
      i++
    }
  }

  swap(arr, i, j)

  return i
}

var getLeastNumbers = function (arr, k) {
  if (k === 0) {
    return []
  }
  if (k === arr.length) {
    return arr
  }

  let start = 0
  let end = arr.length - 1
  let index

  while (index !== k - 1) {
    index = sort(arr, start, end)
    if (index < k - 1) {
      start = index + 1
    } else if (index > k - 1) {
      end = index - 1
    }
  }

  return arr.slice(0, index + 1)
}
