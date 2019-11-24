const print = arr => {
  const index = arr.findIndex(x => x !== 0)
  if (index === -1) {
    return
  }

  const str = arr.slice(index).join('')
  console.log(str)
}

export default n => {
  if (n <= 0) {
    return
  }

  const run = (i, numArr) => {
    if (i > n) {
      return
    }

    for (let j = i === 1 ? 0 : 1; j <= 9; j++) {
      const arr = [...numArr]
      arr[i - 1] = j
      print(arr)
      run(i + 1, arr)
    }
  }

  run(1, new Array(n).fill(0))
}
