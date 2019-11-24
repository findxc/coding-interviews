export default n => {
  if (n === 2) {
    return 1
  }
  if (n === 3) {
    return 2
  }

  const results = new Array(n + 1)
  results[1] = 1
  results[2] = 2
  results[3] = 3

  // 外层循环表示依次计算 f(4)，f(5)，f(6)，一直到计算 f(n)
  for (let i = 4; i <= n; i++) {
    let max = 0
    // 内层循环表示计算 f(i) 的值，为各种情况下的最大值
    for (let j = 1; j <= i / 2; j++) {
      let tmp = results[j] * results[i - j]
      if (max < tmp) {
        max = tmp
      }
    }
    results[i] = max
  }

  return results[n]
}
