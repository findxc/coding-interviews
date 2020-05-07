class Node {
  constructor(props = {}) {
    const { val = null, left = null, right = null } = props
    this.val = val
    this.left = left
    this.right = right
  }
}

const serializeWalk = (node, str) => {
  if (!node) {
    return `${str},null`
  }
  const { val, left, right } = node
  str = `${str},${val}`
  str = serializeWalk(left, str)
  str = serializeWalk(right, str)
  return str
}

// 把一棵树序列化
var serialize = function (root) {
  if (!root) {
    return ''
  }

  let str = `${root.val}`

  str = serializeWalk(root.left, str)
  str = serializeWalk(root.right, str)

  return str
}

const deserializeWalk = (list, index) => {
  const value = list[index++]
  if (['null', '', undefined].includes(value)) {
    return [null, index]
  }

  let left, right
  const node = new Node({ val: value })

  ;[left, index] = deserializeWalk(list, index)
  node.left = left
  ;[right, index] = deserializeWalk(list, index)
  node.right = right

  return [node, index]
}

var deserialize = function (data) {
  const list = data.split(',')
  const [root] = deserializeWalk(list, 0)
  return root
}
