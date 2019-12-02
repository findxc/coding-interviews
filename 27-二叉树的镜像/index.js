// 递归解法
export const getMirrorTree1 = node => {
  if (!node) {
    return null
  }

  const { left, right } = node
  if (!left && !right) {
    return node
  }

  node.left = getMirrorTree1(right)
  node.right = getMirrorTree1(left)

  return node
}

// 循环解法
export const getMirrorTree2 = node => {
  if (!node) {
    return null
  }

  let nodes = [node]

  while (nodes.length) {
    let newNodes = []
    nodes.forEach(n => {
      const { left, right } = n
      n.left = right
      n.right = left

      if (n.left) {
        newNodes.push(n.left)
      }
      if (n.right) {
        newNodes.push(n.right)
      }
    })
    nodes = newNodes
  }

  return node
}
