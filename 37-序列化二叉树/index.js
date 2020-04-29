class Node {
  constructor(props = {}) {
    const { val = null, left = null, right = null } = props
    this.val = val
    this.left = left
    this.right = right
  }
}

var serialize = function (root) {
  const list = []

  // 每一次遍历当前层的结点，如果还有下一层的结点，就继续遍历
  const walk = (nodes) => {
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
      walk(newNodes)
    }
  }

  if (root) {
    walk([root])

    while (list[list.length - 1] === null) {
      list.pop()
    }
  }

  return JSON.stringify(list)
}

var deserialize = function (data) {
  const list = JSON.parse(data)

  const { length } = list
  if (!length) {
    return null
  }

  let index = 0

  // 这里的 undefined 是当 index 超出数组长度后值就是 undefined
  const invalidValues = [null, undefined]

  // 每一次遍历当前层的结点，如果还有下一层的结点，就继续遍历
  const walk = (nodes) => {
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
      walk(newNodes)
    }
  }

  const head = new Node({ val: list[index++] })
  walk([head])

  return head
}
