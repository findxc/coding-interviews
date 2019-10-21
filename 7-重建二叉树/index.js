class TreeNode {
  constructor({ value, left, right }) {
    this.value = value
    this.left = left
    this.right = right
  }
}

export const getTreeHead = (forwardValues, middleValues) => {
  const headValue = forwardValues[0]
  const index = middleValues.indexOf(headValue)

  return new TreeNode({
    value: headValue,
    left: index
      ? getTreeHead(
          forwardValues.slice(1, 1 + index),
          middleValues.slice(0, index)
        )
      : null,
    right:
      1 + index < forwardValues.length
        ? getTreeHead(
            forwardValues.slice(1 + index),
            middleValues.slice(1 + index)
          )
        : null,
  })
}
