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
