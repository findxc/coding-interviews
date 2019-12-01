import reverse from './index'

class Node {
  constructor({ value, next }) {
    this.value = value
    this.next = next
  }
}

test('头节点为空', () => {
  expect(reverse(null)).toEqual(null)
})

test('只有一个节点', () => {
  const node1 = new Node({ value: 1, next: null })
  expect(reverse(node1)).toEqual(node1)
})

test('有两个节点', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  node1.next = node2

  const reverseNode1 = reverse(node1)
  expect(reverseNode1.value).toEqual(2)
  expect(reverseNode1.next.value).toEqual(1)
  expect(reverseNode1.next.next).toEqual(null)
})

test('有多个节点', () => {
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  const node4 = new Node({ value: 4, next: null })
  const node5 = new Node({ value: 5, next: null })
  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5

  const reverseNode1 = reverse(node1)

  expect(reverseNode1.value).toEqual(5)
  expect(reverseNode1.next.value).toEqual(4)
  expect(reverseNode1.next.next.value).toEqual(3)
  expect(reverseNode1.next.next.next.value).toEqual(2)
  expect(reverseNode1.next.next.next.next.value).toEqual(1)
  expect(reverseNode1.next.next.next.next.next).toEqual(null)
})
