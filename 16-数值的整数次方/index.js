const calculatePow = (n, m) => {
  if (!m) {
    return 1
  }
  if (m === 1) {
    return n
  }

  let res = calculatePow(n, m >> 1)
  res = res * res
  // 如果 m 是奇数的话，比如 5， 5 >> 1 为 2，那么拆为 2 次方、2 次方、1 次方
  if (m & 1) {
    res = res * n
  }
  return res
}

const calculate = (n, m) => {
  if (!n) {
    return 0
  }
  if (!m) {
    return 1
  }

  const mIsPositive = m > 0
  const result = calculatePow(n, mIsPositive ? m : -m)
  return mIsPositive ? result : 1 / result
}

export default calculate
