## 合并两个排序的链表

有两个已经排好序的单链表，输入两个链表的头节点，输出按大小顺序合并后的链表头节点。

### 解法

代码如下：

```js
const merge = (node1, node2) => {
  if (!node1) {
    return node2
  }
  if (!node2) {
    return node1
  }

  let node = {}

  if (node1.value <= node2.value) {
    node.value = node1.value
    node.next = merge(node1.next, node2)
  } else {
    node.value = node2.value
    node.next = merge(node1, node2.next)
  }

  return node
}

export default merge
```
