export default (tree) => {
  if (!tree) {
    return
  }
  let stack1 = [tree]
  let stack2 = []
  while (stack1.length || stack2.length) {
    while (stack1.length) {
      const node = stack1.pop()
      const { value, left, right } = node
      console.log(value)
      if (left) {
        stack2.push(left)
      }
      if (right) {
        stack2.push(right)
      }
    }
    if (stack2.length) {
      console.log('\n')
    }
    while (stack2.length) {
      const node = stack2.pop()
      const { value, left, right } = node
      console.log(value)
      if (right) {
        stack1.push(right)
      }
      if (left) {
        stack1.push(left)
      }
    }
    if (stack1.length) {
      console.log('\n')
    }
  }
}
