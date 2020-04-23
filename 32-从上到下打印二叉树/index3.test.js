import logTree from './index3'

class Node {
  constructor({ value, left = null, right = null }) {
    this.value = value
    this.left = left
    this.right = right
  }
}

test('只有根节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
})

test('有两个节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
})

test('有两个节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.right = new Node({ value: 2 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
})

test('有三个节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.right = new Node({ value: 3 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 2)
})

test('有多节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.right = new Node({ value: 3 })
  tree.left.left = new Node({ value: 4 })
  tree.left.right = new Node({ value: 5 })
  tree.right.left = new Node({ value: 6 })
  tree.right.right = new Node({ value: 7 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(5, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
  expect(global.console.log).toHaveBeenNthCalledWith(7, 5)
  expect(global.console.log).toHaveBeenNthCalledWith(8, 6)
  expect(global.console.log).toHaveBeenNthCalledWith(9, 7)
})

test('有多节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.right = new Node({ value: 3 })
  tree.left.left = new Node({ value: 4 })
  tree.left.right = new Node({ value: 5 })
  tree.right.left = new Node({ value: 6 })
  tree.right.right = new Node({ value: 7 })
  tree.right.left.left = new Node({ value: 8 })
  tree.right.left.right = new Node({ value: 9 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(5, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
  expect(global.console.log).toHaveBeenNthCalledWith(7, 5)
  expect(global.console.log).toHaveBeenNthCalledWith(8, 6)
  expect(global.console.log).toHaveBeenNthCalledWith(9, 7)
  expect(global.console.log).toHaveBeenNthCalledWith(10, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(11, 9)
  expect(global.console.log).toHaveBeenNthCalledWith(12, 8)
})

test('有多节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.right = new Node({ value: 3 })

  tree.left.right = new Node({ value: 4 })
  tree.left.right.left = new Node({ value: 7 })
  tree.left.right.right = new Node({ value: 8 })

  tree.right.left = new Node({ value: 5 })
  tree.right.right = new Node({ value: 6 })
  tree.right.right.left = new Node({ value: 9 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(5, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
  expect(global.console.log).toHaveBeenNthCalledWith(7, 5)
  expect(global.console.log).toHaveBeenNthCalledWith(8, 6)
  expect(global.console.log).toHaveBeenNthCalledWith(9, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(10, 9)
  expect(global.console.log).toHaveBeenNthCalledWith(11, 8)
  expect(global.console.log).toHaveBeenNthCalledWith(12, 7)
})
