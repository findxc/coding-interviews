import { printReverse } from './index'

test('只有头节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const chain = { next: null }
  printReverse(chain)

  expect(global.console.log).toHaveBeenNthCalledWith(1, undefined)
})

test('只有头节点和另外一个结点', () => {
  global.console = {
    log: jest.fn(),
  }

  const chain = { next: { next: null, value: 'a' } }
  printReverse(chain)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 'a')
  expect(global.console.log).toHaveBeenNthCalledWith(2, undefined)
})

test('有多个节点', () => {
  global.console = {
    log: jest.fn(),
  }

  const chain = {
    next: {
      next: { next: { next: null, value: 'c' }, value: 'b' },
      value: 'a',
    },
  }
  printReverse(chain)

  expect(global.console.log).toHaveBeenNthCalledWith(1, 'c')
  expect(global.console.log).toHaveBeenNthCalledWith(2, 'b')
  expect(global.console.log).toHaveBeenNthCalledWith(3, 'a')
  expect(global.console.log).toHaveBeenNthCalledWith(4, undefined)
})
