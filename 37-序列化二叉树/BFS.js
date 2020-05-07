class Node {
  constructor(props = {}) {
    const { val = null, left = null, right = null } = props
    this.val = val
    this.left = left
    this.right = right
  }
}

const serializeWalk = (nodes, list) => {
  const newNodes = nodes.reduce((total, current) => {
    if (current) {
      const { val, left, right } = current
      list.push(val)
      total.push(left)
      total.push(right)
    } else {
      list.push(current)
    }
    return total
  }, [])

  if (newNodes.length) {
    return serializeWalk(newNodes, list)
  }
  return list
}

// 把一棵树序列化
var serialize = function (root) {
  const list = root ? serializeWalk([root], []) : []
  return JSON.stringify(list)
}

// 这里的 undefined 是当 index 超出数组长度后值就是 undefined
const invalidValues = [null, undefined]

const deserializeWalk = (nodes, list, index, head) => {
  const newNodes = nodes.reduce((total, current) => {
    const leftValue = list[index++]
    if (!invalidValues.includes(leftValue)) {
      current.left = new Node({ val: leftValue })
      total.push(current.left)
    }

    const rightValue = list[index++]
    if (!invalidValues.includes(rightValue)) {
      current.right = new Node({ val: rightValue })
      total.push(current.right)
    }

    return total
  }, [])

  if (newNodes.length) {
    return deserializeWalk(newNodes, list, index, head)
  }
  return head
}

// 根据字符串反序列化得到一棵树
var deserialize = function (data) {
  const list = JSON.parse(data)

  const { length } = list
  if (!length) {
    return null
  }

  let index = 0

  const head = new Node({ val: list[index++] })
  return deserializeWalk([head], list, index, head)
}
