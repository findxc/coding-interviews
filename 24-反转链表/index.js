export default head => {
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
