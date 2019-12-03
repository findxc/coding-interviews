import isSymmetricTree from './index'

class Node {
  constructor({ value, left = null, right = null }) {
    this.value = value
    this.left = left
    this.right = right
  }
}

test('树为空或者只有一个节点时', () => {
  expect(isSymmetricTree(null)).toEqual(false)

  const a1 = new Node({ value: 1 })
  expect(isSymmetricTree(a1)).toEqual(true)
})

test('两个节点', () => {
  const a1 = new Node({ value: 1 })
  a1.left = new Node({ value: 2 })
  expect(isSymmetricTree(a1)).toEqual(false)

  const a2 = new Node({ value: 1 })
  a2.right = new Node({ value: 2 })
  expect(isSymmetricTree(a2)).toEqual(false)
})

test('三个节点', () => {
  const a1 = new Node({ value: 1 })
  a1.left = new Node({ value: 2 })
  a1.right = new Node({ value: 2 })

  expect(isSymmetricTree(a1)).toEqual(true)

  a1.right.value = 3
  expect(isSymmetricTree(a1)).toEqual(false)
})

test('四个节点', () => {
  const a1 = new Node({ value: 1 })
  a1.left = new Node({ value: 2 })
  a1.right = new Node({ value: 2 })
  a1.left.left = new Node({ value: 3 })
  expect(isSymmetricTree(a1)).toEqual(false)
})

test('五个节点', () => {
  const a1 = new Node({ value: 1 })
  a1.left = new Node({ value: 2 })
  a1.right = new Node({ value: 2 })

  a1.left.right = new Node({ value: 4 })
  a1.right.left = new Node({ value: 4 })
  expect(isSymmetricTree(a1)).toEqual(true)

  a1.right.left = new Node({ value: 5 })
  expect(isSymmetricTree(a1)).toEqual(false)
})

test('多个节点', () => {
  const a1 = new Node({ value: 1 })
  a1.left = new Node({ value: 2 })
  a1.right = new Node({ value: 2 })

  a1.left.left = new Node({ value: 3 })
  a1.left.right = new Node({ value: 4 })

  a1.right.left = new Node({ value: 4 })
  a1.right.right = new Node({ value: 3 })
  expect(isSymmetricTree(a1)).toEqual(true)

  a1.right.right = new Node({ value: 5 })
  expect(isSymmetricTree(a1)).toEqual(false)
})
