# 重建二叉树

输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。假设输入的前序遍历和中序遍历的结果中不含重复的数字。例如，输入前序遍历序列 [1, 2, 4, 7, 3, 5, 6, 8] 和中序遍历序列 [4, 7, 2, 1, 5, 3, 8, 6]。那么树是什么样的？

## 解法

对于前序遍历，[1, 2, 4, 7, 3, 5, 6, 8] 的第一个值，就是根节点。1 把 [4, 7, 2, 1, 5, 3, 8, 6] 分为 [4, 7, 2] 和 [5, 3, 8, 6]。所以对于根节点来说，左子树的前序遍历是 [2, 4, 7]，中序遍历是 [4, 7, 2]。右子树的前序遍历是 [3, 5, 6, 8]，中序遍历是 [5, 3, 8, 6]。这样去递归可以知道整个树。

代码如下：

```js
class TreeNode {
  constructor({ value, left, right }) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export const getTreeHead = (forwardValues, middleValues) => {
  const headValue = forwardValues[0]
  const index = middleValues.indexOf(headValue)

  return new TreeNode({
    value: headValue,
    left: index
      ? getTreeHead(
          forwardValues.slice(1, 1 + index),
          middleValues.slice(0, index)
        )
      : null,
    right:
      1 + index < forwardValues.length
        ? getTreeHead(
            forwardValues.slice(1 + index),
            middleValues.slice(1 + index)
          )
        : null,
  })
}
```
