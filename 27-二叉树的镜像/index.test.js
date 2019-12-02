import { getMirrorTree2 as getMirrorTree } from './index'

class Node {
  constructor({ value, left = null, right = null }) {
    this.value = value
    this.left = left
    this.right = right
  }
}

test('树为空或者只有一个节点时', () => {
  expect(getMirrorTree(null)).toEqual(null)

  const a1 = new Node({ value: 1 })
  expect(getMirrorTree(a1)).toEqual(a1)
})

test('只有左节点', () => {
  const a1 = new Node({ value: 1 })
  a1.left = new Node({ value: 2 })
  a1.left.left = new Node({ value: 3 })

  const b1 = new Node({ value: 1 })
  b1.right = new Node({ value: 2 })
  b1.right.right = new Node({ value: 3 })

  expect(getMirrorTree(a1)).toEqual(b1)
})

test('只有右节点', () => {
  const a1 = new Node({ value: 1 })
  a1.right = new Node({ value: 2 })
  a1.right.right = new Node({ value: 3 })

  const b1 = new Node({ value: 1 })
  b1.left = new Node({ value: 2 })
  b1.left.left = new Node({ value: 3 })

  expect(getMirrorTree(a1)).toEqual(b1)
})

test('左右节点都有', () => {
  const a1 = new Node({ value: 1 })
  a1.left = new Node({ value: 2 })
  a1.right = new Node({ value: 3 })

  a1.left.left = new Node({ value: 4 })
  a1.left.right = new Node({ value: 5 })

  a1.right.left = new Node({ value: 6 })
  a1.right.right = new Node({ value: 7 })

  const b1 = new Node({ value: 1 })
  b1.left = new Node({ value: 3 })
  b1.right = new Node({ value: 2 })

  b1.left.left = new Node({ value: 7 })
  b1.left.right = new Node({ value: 6 })

  b1.right.left = new Node({ value: 5 })
  b1.right.right = new Node({ value: 4 })

  expect(getMirrorTree(a1)).toEqual(b1)
})

test('左右节点都有', () => {
  const a1 = new Node({ value: 1 })
  a1.left = new Node({ value: 2 })
  a1.right = new Node({ value: 3 })

  a1.left.right = new Node({ value: 5 })

  a1.right.left = new Node({ value: 6 })

  const b1 = new Node({ value: 1 })
  b1.left = new Node({ value: 3 })
  b1.right = new Node({ value: 2 })

  b1.left.right = new Node({ value: 6 })

  b1.right.left = new Node({ value: 5 })

  expect(getMirrorTree(a1)).toEqual(b1)
})

test('左右节点都有', () => {
  const a1 = new Node({ value: 1 })
  a1.left = new Node({ value: 2 })
  a1.right = new Node({ value: 3 })

  a1.left.left = new Node({ value: 4 })

  a1.right.right = new Node({ value: 7 })

  const b1 = new Node({ value: 1 })
  b1.left = new Node({ value: 3 })
  b1.right = new Node({ value: 2 })

  b1.left.left = new Node({ value: 7 })

  b1.right.right = new Node({ value: 4 })

  expect(getMirrorTree(a1)).toEqual(b1)
})
