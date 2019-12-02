## 二叉树的镜像

输入一颗二叉树的根节点，输出它的镜像。

### 递归解法

代码如下：

```js
export const getMirrorTree1 = node => {
  if (!node) {
    return null
  }

  const { left, right } = node
  if (!left && !right) {
    return node
  }

  node.left = getMirrorTree1(right)
  node.right = getMirrorTree1(left)

  return node
}
```

### 循环解法

代码如下：

```js
export const getMirrorTree2 = node => {
  if (!node) {
    return null
  }

  let nodes = [node]

  while (nodes.length) {
    let newNodes = []
    nodes.forEach(n => {
      const { left, right } = n
      n.left = right
      n.right = left

      if (n.left) {
        newNodes.push(n.left)
      }
      if (n.right) {
        newNodes.push(n.right)
      }
    })
    nodes = newNodes
  }

  return node
}
```
