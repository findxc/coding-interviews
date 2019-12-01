import merge from './index'

class Node {
  constructor({ value, next }) {
    this.value = value
    this.next = next
  }
}

const getChainValues = head => {
  const values = []
  let node = head
  while (node) {
    values.push(node.value)
    node = node.next
  }
  return values
}

test('头节点为空', () => {
  expect(merge(null, null)).toEqual(null)
})

test('只有一个节点', () => {
  const node1 = new Node({ value: 1, next: null })
  expect(merge(null, node1)).toEqual(node1)

  const node2 = new Node({ value: 2, next: null })
  expect(merge(node2, null)).toEqual(node2)

  const node3 = new Node({ value: 3, next: null })
  const node4 = new Node({ value: 4, next: null })
  expect(getChainValues(merge(node3, node4))).toEqual([3, 4])

  const node5 = new Node({ value: 5, next: null })
  const node6 = new Node({ value: 6, next: null })
  expect(getChainValues(merge(node6, node5))).toEqual([5, 6])
})

test('有多个节点', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  node1.next = node2
  node2.next = node3

  const node4 = new Node({ value: 4, next: null })
  const node5 = new Node({ value: 5, next: null })
  const node6 = new Node({ value: 6, next: null })
  node4.next = node5
  node5.next = node6

  expect(getChainValues(merge(node1, node4))).toEqual([1, 2, 3, 4, 5, 6])
})

test('有多个节点', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  node1.next = node2
  node2.next = node3

  const node4 = new Node({ value: 4, next: null })
  const node5 = new Node({ value: 5, next: null })
  const node6 = new Node({ value: 6, next: null })
  node4.next = node5
  node5.next = node6

  expect(getChainValues(merge(node4, node1))).toEqual([1, 2, 3, 4, 5, 6])
})

test('有多个节点', () => {
  const node1 = new Node({ value: 2, next: null })
  const node2 = new Node({ value: 3, next: null })
  const node3 = new Node({ value: 6, next: null })
  node1.next = node2
  node2.next = node3

  const node4 = new Node({ value: 1, next: null })
  const node5 = new Node({ value: 4, next: null })
  const node6 = new Node({ value: 5, next: null })
  node4.next = node5
  node5.next = node6

  expect(getChainValues(merge(node1, node4))).toEqual([1, 2, 3, 4, 5, 6])
})
