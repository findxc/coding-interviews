# 替换空格

有一个字符串数组，如果某一项为空格，那么进行替换。比如 ['a', ' ', 'b'] 替换后变为 ['a', '%', '2', '0', 'b']。

## 解法

首先我们要知道，如果有一个数组 [1, 3, 4, 5]，要在 1 后面插入 2 的话，需要首先把 3、4、5 往后移动一位，然后再把 2 插入进去。

在替换空格这个题目中，如果我们是从开头开始处理，比如 ['a', ' ', 'b', ' ', 'c', 'd']，在处理第一个空格时，我们需要把第一个空格后面的项往后移动，而在处理第二个空格时，我们又需要把第二个空格后的项往后移动，这样会造成一些重复的移动，时间复杂度是 O(n^2)。（因为首先需要循环一遍，那么时间复杂度就是 O(n) 了，然后每次循环进行移动操作的时间复杂度也是 O(n)，综合起来就是 O(n^2)）

而如果我们先计算好在完成替换后该数组的长度，然后从结尾开始处理，这样是不需要重复移动的，时间复杂度是 O(n)。

代码如下：

```js
const replaceSpace = arr => {
  const length = arr.length
  let spaceCount = 0
  for (let i = 0; i <= length - 1; i++) {
    if (arr[i] === ' ') {
      spaceCount++
    }
  }

  const newLength = length + spaceCount * 2
  let arrIndex = newLength - 1

  for (let i = length - 1; i >= 0; i--) {
    if (arr[i] === ' ') {
      arr[arrIndex--] = '0'
      arr[arrIndex--] = '2'
      arr[arrIndex--] = '%'
    } else {
      arr[arrIndex--] = arr[i]
    }
  }

  return arr
}
```
