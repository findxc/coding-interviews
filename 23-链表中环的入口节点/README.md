## 链表中环的入口节点

给一个链表的头节点，如果链表中存在环，找到环的入口节点。

### 解法

#### 如何判断链表中是否存在环

两个指针同时从头节点出发，快指针每次前进两步，慢指针每次前进一步，如果快指针能在某个时刻和慢指针指向同一个节点，那么说明存在环。

#### 如何找到环的入口

当快慢指针指向同一个节点说明存在环时，此时快指针不动，慢指针继续前进，当慢指针再次和快指针指向同一个节点时，可以得到环的节点数量，假设为 k 。

然后在定义两个指向头节点的指针 a 和 b，让指针 a 往前走 k 步指向第 k + 1 个节点，然后 a、b 同时前进，直到 a 和 b 指向同一个节点，此时的节点就是环的入口节点。

代码如下：

```js
export default head => {
  if (!head) {
    return null
  }

  // 第一步，先用快慢指针判断是否存在环
  let fastNode = head
  let slowNode = head

  let loopExist = false

  while (fastNode) {
    fastNode = fastNode.next
    if (!fastNode) {
      break
    }
    fastNode = fastNode.next
    slowNode = slowNode.next

    if (fastNode === slowNode) {
      loopExist = true
      break
    }
  }

  if (!loopExist) {
    return null
  }

  // 第二步，计算环的节点数量
  let count = 1
  while (slowNode.next !== fastNode) {
    count++
    slowNode = slowNode.next
  }

  // 第三步，第一个节点先走 k 步，第二个节点从头开始，然后两个节点一起走，直到走到同一个节点
  let nodeA = head
  while (count) {
    nodeA = nodeA.next
    count--
  }

  let nodeB = head

  while (nodeA !== nodeB) {
    nodeA = nodeA.next
    nodeB = nodeB.next
  }

  return nodeA
}
```
