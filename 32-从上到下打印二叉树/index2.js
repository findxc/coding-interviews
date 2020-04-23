export default (tree) => {
  if (!tree) {
    return
  }

  let nodes = [tree, '|']
  while (nodes.length > 1) {
    const head = nodes.shift()
    if (head === '|') {
      console.log('\n')
      nodes.push('|')
      continue
    }
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
