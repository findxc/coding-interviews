## 数值的整数次方

求一个数的整数次方，不需要考虑大数问题。

### 解法

这里需要注意指数为负数或者 0 的情况。

指数为负数的话，其实就是正数情况下的值，然后求倒数。

再就是比如对于指数为 32 的时候，可以求了 16 之后，然后直接 16 次方乘以 16 次方，这样来优化效率。而对于指数为 33 的时候，就是 16 次方乘以 16 次方再乘以 1 次方。

代码如下：

```js
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
```
