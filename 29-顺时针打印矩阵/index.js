const printOneCircle = (arr, rowLength, columnLength, index) => {
  for (let i = index; i <= columnLength - index - 1; i++) {
    console.log(arr[index][i])
  }

  for (let i = index + 1; i <= rowLength - index - 1; i++) {
    console.log(arr[i][columnLength - index - 1])
  }

  for (let i = columnLength - index - 2; i >= index; i--) {
    console.log(arr[rowLength - index - 1][i])
  }

  for (let i = rowLength - index - 2; i >= index + 1; i--) {
    console.log(arr[i][index])
  }
}

export default arr => {
  if (!arr.length) {
    return
  }

  const rowLength = arr.length
  const columnLength = arr[0].length

  const count = Math.min(Math.ceil(rowLength / 2), Math.ceil(columnLength / 2))

  for (let i = 0; i < count; i++) {
    printOneCircle(arr, rowLength, columnLength, i)
  }
}
