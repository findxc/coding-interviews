import findKNode from './index'

class Node {
  constructor({ value, next }) {
    this.value = value
    this.next = next
  }
}

test('头节点为空', () => {
  expect(findKNode(null)).toEqual(null)
})

test('不存在环', () => {
  const node = new Node({ value: 1, next: null })
  expect(findKNode(node)).toEqual(null)
})

test('不存在环', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  node1.next = node2
  expect(findKNode(node1)).toEqual(null)
})

test('不存在环', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  const node4 = new Node({ value: 4, next: null })
  const node5 = new Node({ value: 5, next: null })
  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5
  expect(findKNode(node1)).toEqual(null)
})

test('存在环时', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  node1.next = node2
  node2.next = node3
  node3.next = node2
  expect(findKNode(node1)).toEqual(node2)
})

test('存在环时', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  const node4 = new Node({ value: 4, next: null })
  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node2
  expect(findKNode(node1)).toEqual(node2)
})

test('存在环时', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  const node4 = new Node({ value: 4, next: null })
  const node5 = new Node({ value: 5, next: null })
  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5
  node5.next = node3
  expect(findKNode(node1)).toEqual(node3)
})

test('头节点就是环的入口', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  node1.next = node2
  node2.next = node1
  expect(findKNode(node1)).toEqual(node1)
})

test('头节点就是环的入口', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  node1.next = node2
  node2.next = node3
  node3.next = node1
  expect(findKNode(node1)).toEqual(node1)
})
