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
