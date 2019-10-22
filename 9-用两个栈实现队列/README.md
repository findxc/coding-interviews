# 用两个栈实现队列

用两个栈实现一个队列，分别完成在队列尾部插入节点和队列头部删除节点的功能。

## 解法

栈是先进后出，队列是先进先出，如何用两个栈来实现一个队列的功能？

思路：

```js
if (当前节点有右子节点) {
  中序遍历的下一个节点是右子节点或者右子节点的最左子节点
} else if(当前节点是父节点的左子节点) {
  中序遍历的下一个节点是父节点
} else {
  去不断找当前节点的父节点，直到这个父节点是它父节点的左子节点，中序遍历的下一个节点就是这个父节点的父节点
}
```

代码如下：

```js
export const getNextMiddleNode = treeNode => {
  if (treeNode.right) {
    let node = treeNode.right
    while (node.left) {
      node = node.left
    }
    return node
  }

  if (treeNode.parent && treeNode.parent.left == treeNode) {
    return treeNode.parent
  }

  let node = treeNode
  while (node) {
    if (node.parent && node.parent.left === node) {
      node = node.parent
      break
    }
    node = node.parent
  }
  return node
}
```
