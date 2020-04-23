import logTree from './index2'

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
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 3)
})

test('有三个节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.left.left = new Node({ value: 3 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(5, 3)
})

test('有三个节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.left.right = new Node({ value: 3 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(5, 3)
})

test('有三个节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.right = new Node({ value: 2 })
  tree.right.left = new Node({ value: 3 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(5, 3)
})

test('有三个节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.right = new Node({ value: 2 })
  tree.right.right = new Node({ value: 3 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(5, 3)
})

test('更多节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.left.left = new Node({ value: 3 })
  tree.left.right = new Node({ value: 4 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(5, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
})

test('更多节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.right = new Node({ value: 3 })
  tree.left.left = new Node({ value: 4 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(5, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
})

test('更多节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.right = new Node({ value: 3 })
  tree.left.right = new Node({ value: 4 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(5, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
})

test('更多节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.right = new Node({ value: 3 })
  tree.right.left = new Node({ value: 4 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(5, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
})

test('更多节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.left = new Node({ value: 2 })
  tree.right = new Node({ value: 3 })
  tree.right.right = new Node({ value: 4 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(5, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
})

test('更多节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const tree = new Node({ value: 1 })
  tree.right = new Node({ value: 2 })
  tree.right.left = new Node({ value: 3 })
  tree.right.right = new Node({ value: 4 })
  logTree(tree)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(4, '\n')
  expect(global.console.log).toHaveBeenNthCalledWith(5, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
})
