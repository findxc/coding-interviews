# 二叉树的下一个节点

给定一个二叉树的其中的一个节点，那么在中序遍历中，下一个节点是？（每个节点除了有左子节点和右子节点指针，还有指向父节点的指针）

## 解法

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
