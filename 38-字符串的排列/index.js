const swap = (list, i, j) => {
  if (i === j) {
    return
  }
  const tmp = list[i]
  list[i] = list[j]
  list[j] = tmp
}

var permutation = function (str) {
  const letters = str.split('')
  const maxIndex = letters.length - 1
  const list = []

  const walk = (index) => {
    if (index === maxIndex) {
      list.push(letters.join(''))
      return
    }

    const exists = []
    for (let i = index; i <= maxIndex; i++) {
      if (!exists.includes(letters[i])) {
        exists.push(letters[i])
        swap(letters, index, i)
        walk(index + 1)
        swap(letters, index, i)
      }
    }
  }

  if (str) {
    walk(0)
  }

  return list
}
