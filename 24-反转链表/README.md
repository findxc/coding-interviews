## 反转链表

输入一个单链表的头节点，反转该链表并输出反转后该链表的头节点。

### 解法

其实就是 a --> b --> c --> d 给反转为 a <-- b <-- c <-- d 。

循环解法代码如下：

```js
export const reverse = head => {
  if (!head || !head.next) {
    return head
  }

  let node1 = null
  let node2 = head

  while (node2) {
    const nextNode = node2.next
    node2.next = node1
    node1 = node2
    node2 = nextNode
  }

  return node1
}
```

递归解法代码如下：

```js
export const recursiveReverse = (node, next = null) => {
  if (!node) {
    return null
  }

  let nextNode = node.next

  node.next = next

  if (!nextNode) {
    return node
  }

  return recursiveReverse(nextNode, node)
}
```
