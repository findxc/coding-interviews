export const calculateFibonacci = n => {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }

  let first = 0
  let second = 1
  let i = 2
  while (i <= n) {
    let current = first + second
    first = second
    second = current
    i++
  }
  return second
}
