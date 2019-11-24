## 剪绳子

一段长度为 n 的绳子，剪成 m 段，n 和 m 均大于 1，长度依次记作 k[0]，k[1]，...，k[m-1]。请问 k[0] × k[1] × ... × k[m-1] 的最大值是多少？

比如长度为 8 的绳子，剪成 2、3、3 三段时，乘积最大，为 18 。

### 动态规划解法

动态规划解法的重点是找到状态转移方程。

```js
// 剪的位置可能在第一个，第二个，等等，最大值就是这些所有可能性中的最大值
f(n) = max(f(1) * f(n - 1), f(2) * f(n - 1), ...)

// 由于 f(n) 会依赖于 f(1)、f(2) 等这些值，所以我们先计算 f(1)、f(2)，采用自底向上的方式求解
```

代码如下：

```js
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
```
