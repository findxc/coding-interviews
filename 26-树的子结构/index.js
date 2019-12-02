// 判断 A 的子节点是不是包含 B 的子节点
const isAContainB = (nodeA, nodeB) => {
  if (!nodeB) {
    return true
  }
  if (!nodeA) {
    return false
  }
  if (nodeA.value !== nodeB.value) {
    return false
  }
  return (
    isAContainB(nodeA.left, nodeB.left) && isAContainB(nodeA.right, nodeB.right)
  )
}

const isSubTree = (nodeA, nodeB) => {
  if (!nodeA || !nodeB) {
    return false
  }

  let result = false

  if (nodeA.value === nodeB.value) {
    result = isAContainB(nodeA, nodeB)
  }
  if (!result) {
    result = isSubTree(nodeA.left, nodeB)
  }
  if (!result) {
    result = isSubTree(nodeA.right, nodeB)
  }

  return result
}

export default isSubTree
