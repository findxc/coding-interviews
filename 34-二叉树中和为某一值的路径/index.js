var pathSum = function (root, sum) {
  if (!root) {
    return []
  }

  const results = []
  let path = [root.val]

  const walk = (node, total) => {
    const { val, left, right } = node
    total = total - val
    if (!left && !right) {
      if (total === 0) {
        results.push([...path])
      }
      return
    }
    if (left) {
      path.push(left.val)
      walk(left, total)
      path.pop()
    }
    if (right) {
      path.push(right.val)
      walk(right, total)
      path.pop()
    }
  }

  walk(root, sum)

  return results
}
