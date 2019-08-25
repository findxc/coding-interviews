# 从尾到头打印链表

输入一个链表的头节点，希望从尾到头打印出每个节点的值。

## 解法

有了头节点，我们可以按顺序去遍历节点。由于是从尾到头打印，可以用递归的方式，如果有下一个节点，就先打印下一个节点，否则才打印当前节点。

代码如下：

```js
const printReverse = node => {
  if (node.next) {
    printReverse(node.next)
  }

  console.log(node.value)
}
```
