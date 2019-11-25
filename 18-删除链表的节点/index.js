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
