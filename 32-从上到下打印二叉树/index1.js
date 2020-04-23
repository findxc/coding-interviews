export default (tree) => {
  if (!tree) {
    return
  }

  let nodes = [tree]
  while (nodes.length) {
    const head = nodes.shift()
    const { value, left, right } = head
    console.log(value)
    if (left) {
      nodes.push(left)
    }
    if (right) {
      nodes.push(right)
    }
  }
}
