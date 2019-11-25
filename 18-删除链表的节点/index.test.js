import deleteNode from './index'

class Node {
  constructor({ value, next }) {
    this.value = value
    this.next = next
  }
}

class Chain {
  constructor(head) {
    this.head = head
  }
}

test('链表只有头节点时', () => {
  const head = new Node({ next: null })
  const chain = new Chain(head)
  deleteNode(chain, head)
  expect(chain).toEqual({ head: null })
})

test('需要删除的节点是最后一个节点时', () => {
  const head = new Node({ next: null })
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  head.next = node1
  node1.next = node2
  const chain = new Chain(head)
  deleteNode(chain, node2)
  expect(chain).toEqual({ head: { next: { value: 1, next: null } } })
})

test('需要删除的节点是最后一个节点时', () => {
  const head = new Node({ next: null })
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  head.next = node1
  node1.next = node2
  node2.next = node3
  const chain = new Chain(head)
  deleteNode(chain, node3)
  expect(chain).toEqual({
    head: { next: { value: 1, next: { value: 2, next: null } } },
  })
})

test('需要删除的节点是中间节点时', () => {
  const head = new Node({ next: null })
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  head.next = node1
  node1.next = node2
  node2.next = node3
  const chain = new Chain(head)
  deleteNode(chain, node1)
  expect(chain).toEqual({
    head: { next: { value: 2, next: { value: 3, next: null } } },
  })
})

test('需要删除的节点是中间节点时', () => {
  const head = new Node({ next: null })
  const node1 = new Node({ value: 1, next: null })
  const node2 = new Node({ value: 2, next: null })
  const node3 = new Node({ value: 3, next: null })
  head.next = node1
  node1.next = node2
  node2.next = node3
  const chain = new Chain(head)
  deleteNode(chain, node2)
  expect(chain).toEqual({
    head: { next: { value: 1, next: { value: 3, next: null } } },
  })
})
