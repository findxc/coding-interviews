export default num => {
  let count = 0
  while (num) {
    count++
    num = (num - 1) & num
  }
  return count
}
