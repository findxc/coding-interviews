import print from './index'

test('只有一行', () => {
  global.console = {
    log: jest.fn(),
  }

  print([[1, 2, 3]])

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
})

test('只有一列', () => {
  global.console = {
    log: jest.fn(),
  }

  print([[1], [2], [3]])

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
})

test('只有两行', () => {
  global.console = {
    log: jest.fn(),
  }

  print([[1, 2, 3], [4, 5, 6]])

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 6)
  expect(global.console.log).toHaveBeenNthCalledWith(5, 5)
  expect(global.console.log).toHaveBeenNthCalledWith(6, 4)
})

test('只有两列', () => {
  global.console = {
    log: jest.fn(),
  }

  print([[1, 2], [3, 4], [5, 6]])

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(3, 4)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 6)
  expect(global.console.log).toHaveBeenNthCalledWith(5, 5)
  expect(global.console.log).toHaveBeenNthCalledWith(6, 3)
})

test('三行三列', () => {
  global.console = {
    log: jest.fn(),
  }

  print([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 6)
  expect(global.console.log).toHaveBeenNthCalledWith(5, 9)
  expect(global.console.log).toHaveBeenNthCalledWith(6, 8)
  expect(global.console.log).toHaveBeenNthCalledWith(7, 7)
  expect(global.console.log).toHaveBeenNthCalledWith(8, 4)
  expect(global.console.log).toHaveBeenNthCalledWith(9, 5)
})

test('四行四列', () => {
  global.console = {
    log: jest.fn(),
  }

  print([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 4)
  expect(global.console.log).toHaveBeenNthCalledWith(5, 8)
  expect(global.console.log).toHaveBeenNthCalledWith(6, 12)
  expect(global.console.log).toHaveBeenNthCalledWith(7, 16)
  expect(global.console.log).toHaveBeenNthCalledWith(8, 15)
  expect(global.console.log).toHaveBeenNthCalledWith(9, 14)
  expect(global.console.log).toHaveBeenNthCalledWith(10, 13)
  expect(global.console.log).toHaveBeenNthCalledWith(11, 9)
  expect(global.console.log).toHaveBeenNthCalledWith(12, 5)
  expect(global.console.log).toHaveBeenNthCalledWith(13, 6)
  expect(global.console.log).toHaveBeenNthCalledWith(14, 7)
  expect(global.console.log).toHaveBeenNthCalledWith(15, 11)
  expect(global.console.log).toHaveBeenNthCalledWith(16, 10)
})

test('五行四列', () => {
  global.console = {
    log: jest.fn(),
  }

  print([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
  ])

  expect(global.console.log).toHaveBeenNthCalledWith(1, 1)
  expect(global.console.log).toHaveBeenNthCalledWith(2, 2)
  expect(global.console.log).toHaveBeenNthCalledWith(3, 3)
  expect(global.console.log).toHaveBeenNthCalledWith(4, 4)
  expect(global.console.log).toHaveBeenNthCalledWith(5, 8)
  expect(global.console.log).toHaveBeenNthCalledWith(6, 12)
  expect(global.console.log).toHaveBeenNthCalledWith(7, 16)
  expect(global.console.log).toHaveBeenNthCalledWith(8, 20)
  expect(global.console.log).toHaveBeenNthCalledWith(9, 19)
  expect(global.console.log).toHaveBeenNthCalledWith(10, 18)
  expect(global.console.log).toHaveBeenNthCalledWith(11, 17)
  expect(global.console.log).toHaveBeenNthCalledWith(12, 13)
  expect(global.console.log).toHaveBeenNthCalledWith(13, 9)
  expect(global.console.log).toHaveBeenNthCalledWith(14, 5)
  expect(global.console.log).toHaveBeenNthCalledWith(15, 6)
  expect(global.console.log).toHaveBeenNthCalledWith(16, 7)
  expect(global.console.log).toHaveBeenNthCalledWith(17, 11)
  expect(global.console.log).toHaveBeenNthCalledWith(18, 15)
  expect(global.console.log).toHaveBeenNthCalledWith(19, 14)
  expect(global.console.log).toHaveBeenNthCalledWith(20, 10)
})
