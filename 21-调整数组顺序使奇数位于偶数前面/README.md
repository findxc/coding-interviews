## 调整数组顺序使奇数位于偶数前面

输入一个整数数组，实现一个函数，把所有的奇数放在数组的前半部分，偶数放在数组的后半部分。

### 解法

其实就是从头和从尾扫描数组，如果从头遇到偶数，就放到尾部。

代码如下：

```js
export default (reg, str) => {
  const run = (reg, str) => {
    if (reg === '' && str === '') {
      return true
    }

    if (reg[0] === '.') {
      return run(reg.slice(1), str.slice(1))
    }

    if (reg[1] === '*') {
      if (reg[0] === str[0]) {
        return run(reg, str.slice(1))
      }
      return run(reg.slice(2), str)
    }

    if (reg[0] === str[0]) {
      return run(reg.slice(1), str.slice(1))
    }

    return false
  }

  return run(reg, str)
}
```
