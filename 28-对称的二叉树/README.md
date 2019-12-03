## 对称的二叉树

判断一个二叉树是不是对称的。

### 解法

代码如下：

```js
const run = (nodeA, nodeB) => {
  if (nodeA === null && nodeB === null) {
    return true
  }
  if (nodeA === null || nodeB === null) {
    return false
  }
  if (nodeA.value !== nodeB.value) {
    return false
  }
  return run(nodeA.left, nodeB.right) && run(nodeA.right, nodeB.left)
}

const isSymmetricTree = root => {
  if (!root) {
    return false
  }
  return run(root.left, root.right)
}

export default isSymmetricTree
```
