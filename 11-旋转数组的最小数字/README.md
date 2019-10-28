## 旋转数组的最小数字

把一个数组最开始的若干个元素搬到数组的末尾，叫做数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。比如，数组 [3, 4, 5, 1, 2] 是数组 [1, 2, 3, 4, 5] 的一个旋转，该数组的最小值为 1。

### 解法

最简单的方法就是直接顺序找数组的最小值，时间复杂度是 O(n)。一般来说，比 O(n) 还小的时间复杂度就是 O(logn)，这里又是排好序的数组，所以很容易联想到二分查找去实现。

旋转数组其实可以理解为两个递增的数组拼起来的，在二分后，必然有一个数组依然是递增的，而另外一个则不是，然后我们把不是递增的那个数组继续二分即可。

比如 [7, 8, 4, 5, 6]，我们需要考虑的三个索引是 0，4，2（即 Math.floor((0+4)/2)），对应的值依次是 7，6，4，由于 7 > 4，所以继续对索引在 0 到 2 之间的部分二分即可。

代码如下：

```js
const findMinInOrder = (arr, index1, index2) => {
  let min = arr[index1]
  let i = index1 + 1
  for (i; i <= index2; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

export const parseMin = arr => {
  const { length } = arr
  if (!length) {
    return undefined
  }
  if (length === 1) {
    return arr[0]
  }

  let index1 = 0
  let index2 = length - 1
  let indexMid = index1

  while (arr[index1] >= arr[index2]) {
    if (index2 - index1 === 1) {
      indexMid = index2
      break
    }

    indexMid = Math.floor((index1 + index2) / 2)

    // 如果三个值都相等，那么无法判断是取左边还是取右边，所以直接用顺序查找最小值
    if (arr[index1] === arr[index2] && arr[indexMid] === arr[index1]) {
      return findMinInOrder(arr, index1, index2)
    }

    // 如果 arr[index1] <= arr[indexMid]，说明 index1 到 indexMid 之间的数组都是递增的，就不用管
    if (arr[index1] <= arr[indexMid]) {
      index1 = indexMid
    } else {
      index2 = indexMid
    }
  }

  return arr[indexMid]
}
```
