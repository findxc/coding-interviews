const parseIsBalancedAndHeight = (node) => {
  if (!node) {
    return [true, 0]
  }

  const [leftBalanced, leftHeight] = parseIsBalancedAndHeight(node.left)
  if (!leftBalanced) {
    return [leftBalanced, leftHeight]
  }
  const [rightBalanced, rightHeight] = parseIsBalancedAndHeight(node.right)
  if (!rightBalanced) {
    return [rightBalanced, rightHeight]
  }
  return [
    Math.abs(leftHeight - rightHeight) <= 1,
    Math.max(leftHeight, rightHeight) + 1,
  ]
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return parseIsBalancedAndHeight(root)[0]
}
