import findKNode from './index'

class Node {
  constructor({ value, next }) {
    this.value = value
    this.next = next
  }
}

test('测试边界', () => {
  expect(findKNode(null, 0)).toEqual(null)
  expect(findKNode(null, 2)).toEqual(null)
  expect(findKNode({ value: 1, next: null }, 2)).toEqual(null)
})

test('测试多个值', () => {
  const node = new Node({ value: 1, next: null })
  expect(findKNode(node, 1)).toEqual(node)
})

test('测试多个值', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  node1.next = node2
  expect(findKNode(node1, 1)).toEqual(node2)
  expect(findKNode(node1, 2)).toEqual(node1)
})

test('测试多个值', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  const node4 = new Node({ value: 4, next: null })
  const node5 = new Node({ value: 5, next: null })
  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5
  expect(findKNode(node1, 6)).toEqual(null)
  expect(findKNode(node1, 5)).toEqual(node1)
  expect(findKNode(node1, 4)).toEqual(node2)
  expect(findKNode(node1, 3)).toEqual(node3)
  expect(findKNode(node1, 2)).toEqual(node4)
  expect(findKNode(node1, 1)).toEqual(node5)
  expect(findKNode(node1, 0)).toEqual(null)
})
