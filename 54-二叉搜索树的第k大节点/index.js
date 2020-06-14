/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let result = undefined

  const walk = (node) => {
    if (result !== undefined) {
      return
    }

    const { left, right, val } = node
    right && walk(right)

    if (result !== undefined) {
      return
    }

    if (k === 1) {
      result = val
    } else {
      k--
      left && walk(left)
    }
  }

  root && walk(root)

  return result
}
