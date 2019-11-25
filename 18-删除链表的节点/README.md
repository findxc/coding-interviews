## 删除链表的节点

给定一个单向链表的头节点和需要被删除的节点，如何在 O(1) 的时间内删除给定的节点？

### 解法

对于单向链表来说，一般删除某个节点需要从头节点开始遍历，找到需要删除的节点并且删除它，这样时间复杂度是 O(n)，显然是不满足题目要求的。

注意题目已经给出了需要删除的节点，由于节点中会包含下个节点的指针，那么直接将当前节点的值赋值为下个节点的值，也等同于删除了当前节点。这样就可以在 O(1) 时间内删除给定节点了。

注意考虑给定需要删除的节点是头节点或者最后一个节点的情况。

代码如下：

```js
export default (chain, node) => {
  if (!chain.head || !node) {
    return
  }

  // 如果只有一个节点时
  if (chain.head === node) {
    chain.head = null
    return
  }

  // 要删除末尾节点时
  if (!node.next) {
    let find = chain.head
    while (find.next !== node) {
      find = find.next
    }
    find.next = null
    return
  }

  // 要删除的节点在中间的情况
  node.value = node.next.value
  node.next = node.next.next
}
```
