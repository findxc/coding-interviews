export const isNumberExistInArray = (numbers, num) => {
  const rowLength = numbers.length
  const columnLength = (numbers[0] || []).length
  let i = 0
  let j = columnLength - 1
  let exist = false
  while (i <= rowLength - 1 && j >= 0 && !exist) {
    if (numbers[i][j] === num) {
      exist = true
    } else if (numbers[i][j] > num) {
      j--
    } else {
      i++
    }
  }
  return exist
}
