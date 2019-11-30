## 正则表达式匹配

字符 `.` 表示可以匹配任意一个字符，字符 `*` 表示可以匹配它前面的字符任意次。

比如 `a.b` 可以匹配 `acb`，`a*b` 可以匹配 `aaaaab`。

### 解法

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
