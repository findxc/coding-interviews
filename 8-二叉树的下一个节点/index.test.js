import { getNextMiddleNode } from './index'

class TreeNode {
  constructor({ value, left, right, parent }) {
    this.value = value
    this.left = left
    this.right = right
    this.parent = parent
  }
}

test('只有一个节点时', () => {
  const root = new TreeNode({ value: 1, left: null, right: null, parent: null })
  expect(getNextMiddleNode(root)).toEqual(null)
})

test('三个节点时', () => {
  const root = new TreeNode({ value: 1, left: null, right: null, parent: null })
  const leftNode = new TreeNode({
    value: 2,
    left: null,
    right: null,
    parent: root,
  })
  const rightNode = new TreeNode({
    value: 3,
    left: null,
    right: null,
    parent: root,
  })
  root.left = leftNode
  root.right = rightNode

  expect(getNextMiddleNode(leftNode)).toEqual(root)
  expect(getNextMiddleNode(root)).toEqual(rightNode)
  expect(getNextMiddleNode(rightNode)).toEqual(null)
})

test('多个节点时', () => {
  const [node1, node2, node3, node4, node5, node6, node7, node8] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
  ].map(value => new TreeNode({ value, left: null, right: null, parent: null }))

  node1.left = node2
  node1.right = node3

  node2.parent = node1
  node2.left = node4

  node4.parent = node2
  node4.right = node7

  node7.parent = node4

  node3.parent = node1
  node3.left = node5
  node3.right = node6

  node5.parent = node3

  node6.parent = node3
  node6.left = node8

  node8.parent = node6

  expect(getNextMiddleNode(node4)).toEqual(node7)
  expect(getNextMiddleNode(node7)).toEqual(node2)
  expect(getNextMiddleNode(node2)).toEqual(node1)
  expect(getNextMiddleNode(node1)).toEqual(node5)
  expect(getNextMiddleNode(node5)).toEqual(node3)
  expect(getNextMiddleNode(node3)).toEqual(node8)
  expect(getNextMiddleNode(node8)).toEqual(node6)
  expect(getNextMiddleNode(node6)).toEqual(null)
})
