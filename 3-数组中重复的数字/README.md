# 找出数组中重复的数字

数组长度为 n，每个数字大小在 0 到 n-1 之间。请找出一个重复的数字。

## 解法一

遍历数组，并把数组中的值作为 key 放在一个对象中，这样在遍历时，如果对象中已经有这个 key 了就说明这个值是重复的值。

这个解法的时间复杂度是 O(n)，同时要注意空间复杂度是 O(n)，因为需要额外定义一个对象。

```js
export const findRepeatNum1 = numbers => {
export const findRepeatNum1 = numbers => {
  const numMap = {}
  const length = numbers.length
  let repeatNum = -1
  let i = 0

  while (i < length && repeatNum === -1) {
    const num = numbers[i]
    if (num in numMap) {
      repeatNum = num
    } else {
      numMap[num] = 1
      i++
    }
  }

  return repeatNum
}
```

## 解法二

由于数组长度为 n，且每个数字大小在 0 到 n-1 之间，那么如果没有重复的值的话，这些数字刚好是 0 到 n-1 各出现一次。

以 [2, 3, 1, 5, 0, 4, 2] 举例，我们遍历数组，第 0 个位置上现在值是 2，我们把它放到第 2 个位置上，数组变为 [1, 3, 2, 5, 0, 4, 2]，这时候第 0 个位置上是 1，我们继续把它放到第 1 个位置上，数组变为 [3, 1, 2, 5, 0, 4, 2]，再继续交换变为 [5, 1, 2, 3, 0, 4, 2]，然后是 [4, 1, 2, 3, 0, 5, 2]，然后是 [0, 1, 2, 3, 4, 5, 2]，这时候第 0 个位置终于是 0 了，我们开始看第 1 个位置，发现值和索引是相等的，继续看第 2 个位置，也相等，再看第 3 个，第 4 个等。直到第 6 个的时候，发现值和是第 2 个位置上值一样，说明重复了。

这个解法由于没有创建额外对象，所以空间复杂度是 O(1)。时间复杂度还是 O(n)。

```js
export const findRepeatNum2 = numbers => {
  const length = numbers.length
  let repeatNum = -1
  let i = 0

  while (i < length && repeatNum === -1) {
    while (numbers[i] !== i) {
      const tmp = numbers[i]
      if (numbers[i] === numbers[tmp]) {
        repeatNum = numbers[i]
        break
      }
      numbers[i] = numbers[tmp]
      numbers[tmp] = tmp
    }
    i++
  }

  return repeatNum
}
```
