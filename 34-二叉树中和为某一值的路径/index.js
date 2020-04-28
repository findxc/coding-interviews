var pathSum = function (root, sum) {
  if (!root) {
    return []
  }

  const results = []
  let path = []

  const walk = (node, total) => {
    const { val, left, right } = node
    total = total - val
    path.push(node.val)

    if (!left && !right) {
      if (total === 0) {
        results.push([...path])
      }
      path.pop()
      return
    }

    if (left) {
      walk(left, total)
    }
    if (right) {
      walk(right, total)
    }

    path.pop()
  }

  walk(root, sum)

  return results
}
