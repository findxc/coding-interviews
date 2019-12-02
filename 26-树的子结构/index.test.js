import isSubTree from './index'

class Node {
  constructor({ value, left = null, right = null }) {
    this.value = value
    this.left = left
    this.right = right
  }
}

test('边界情况', () => {
  expect(isSubTree(null, null)).toEqual(false)

  const a1 = new Node({ value: 1 })
  expect(isSubTree(a1, null)).toEqual(false)

  a1.left = new Node({ value: 2 })
  expect(isSubTree(a1, null)).toEqual(false)
})

test('B只有一个节点的情况', () => {
  const a1 = new Node({ value: 1 })
  const b1 = new Node({ value: 1 })
  expect(isSubTree(a1, b1)).toEqual(true)

  b1.value = 2
  expect(isSubTree(a1, b1)).toEqual(false)

  a1.left = new Node({ value: 2 })
  expect(isSubTree(a1, b1)).toEqual(true)

  b1.value = 1
  expect(isSubTree(a1, b1)).toEqual(true)

  b1.value = 3
  expect(isSubTree(a1, b1)).toEqual(false)
})

test('只有左节点', () => {
  const a1 = new Node({ value: 1 })
  const b1 = new Node({ value: 1 })
  b1.left = new Node({ value: 2 })
  a1.left = new Node({ value: 2 })
  a1.left.left = new Node({ value: 3 })
  expect(isSubTree(a1, b1)).toEqual(true)

  b1.left.left = new Node({ value: 3 })
  expect(isSubTree(a1, b1)).toEqual(true)

  b1.left.left = new Node({ value: 4 })
  expect(isSubTree(a1, b1)).toEqual(false)

  const b2 = new Node({ value: 2 })
  b2.left = new Node({ value: 3 })
  expect(isSubTree(a1, b2)).toEqual(true)

  b2.left = new Node({ value: 1 })
  expect(isSubTree(a1, b2)).toEqual(false)
})

test('只有右节点', () => {
  const a1 = new Node({ value: 1 })
  const b1 = new Node({ value: 1 })
  b1.right = new Node({ value: 2 })
  a1.right = new Node({ value: 2 })
  a1.right.right = new Node({ value: 3 })
  expect(isSubTree(a1, b1)).toEqual(true)

  b1.right.right = new Node({ value: 3 })
  expect(isSubTree(a1, b1)).toEqual(true)

  b1.right.right = new Node({ value: 4 })
  expect(isSubTree(a1, b1)).toEqual(false)

  const b2 = new Node({ value: 2 })
  b2.right = new Node({ value: 3 })
  expect(isSubTree(a1, b2)).toEqual(true)

  b2.right = new Node({ value: 1 })
  expect(isSubTree(a1, b2)).toEqual(false)
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
  b1.left = new Node({ value: 2 })
  b1.right = new Node({ value: 3 })
  expect(isSubTree(a1, b1)).toEqual(true)
  b1.right.value = 4
  expect(isSubTree(a1, b1)).toEqual(false)

  const b2 = new Node({ value: 2 })
  b2.left = new Node({ value: 4 })
  b2.right = new Node({ value: 5 })
  expect(isSubTree(a1, b2)).toEqual(true)
  b2.right.value = 4
  expect(isSubTree(a1, b2)).toEqual(false)

  const b3 = new Node({ value: 3 })
  b3.left = new Node({ value: 6 })
  b3.right = new Node({ value: 7 })
  expect(isSubTree(a1, b3)).toEqual(true)
  b3.right.value = 4
  expect(isSubTree(a1, b3)).toEqual(false)
})
