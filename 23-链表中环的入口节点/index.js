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
