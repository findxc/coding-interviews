## 单链表中倒数第 k 个节点

输入一个单链表的头节点，返回单链表中倒数第 k 个节点。

### 解法

最容易想到的是从头节点开始扫描，拿到单链表的长度，这样就知道倒数第 k 个节点是正数第几个节点了。

一个优化的思路是，从头节点开始扫描，当扫描到第 k 个节点时，再额外定义一个从头开始的指针，然后两个指针一起前进，直到第一个指针到末尾，这个时候第二个指针就是指向倒数第 k 个节点。

代码如下：

```js
export default (head, k) => {
  if (!head || k <= 0) {
    return null
  }

  let firstNode = head
  let i = 1
  while (i < k && firstNode) {
    firstNode = firstNode.next
    i++
  }

  // i < k 说明链表总节点数小于 k
  if (i < k || !firstNode) {
    return null
  }

  let secondNode = head
  while (firstNode.next) {
    firstNode = firstNode.next
    secondNode = secondNode.next
  }

  return secondNode
}
```
