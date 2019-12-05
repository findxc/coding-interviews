import Stack from './index'

test('空的栈时', () => {
  const stack = new Stack()
  expect(stack.min()).toEqual(undefined)
  expect(stack.pop()).toEqual(undefined)

  stack.push(1)
  expect(stack.min()).toEqual(1)
  expect(stack.pop()).toEqual(1)

  expect(stack.min()).toEqual(undefined)
  expect(stack.pop()).toEqual(undefined)
})

test('先小再大时', () => {
  const stack = new Stack()

  stack.push(1)
  stack.push(2)
  expect(stack.min()).toEqual(1)
  expect(stack.pop()).toEqual(2)

  expect(stack.min()).toEqual(1)
  expect(stack.pop()).toEqual(1)

  expect(stack.min()).toEqual(undefined)
  expect(stack.pop()).toEqual(undefined)
})

test('先大再小时', () => {
  const stack = new Stack()

  stack.push(2)
  stack.push(1)
  expect(stack.min()).toEqual(1)
  expect(stack.pop()).toEqual(1)

  expect(stack.min()).toEqual(2)
  expect(stack.pop()).toEqual(2)

  expect(stack.min()).toEqual(undefined)
  expect(stack.pop()).toEqual(undefined)
})

test('有大有小时', () => {
  const stack = new Stack()

  stack.push(2)
  stack.push(1)
  stack.push(3)
  stack.push(0)
  stack.push(5)

  expect(stack.min()).toEqual(0)
  expect(stack.pop()).toEqual(5)

  expect(stack.min()).toEqual(0)
  expect(stack.pop()).toEqual(0)

  expect(stack.min()).toEqual(1)
  expect(stack.pop()).toEqual(3)

  stack.push(4)

  expect(stack.min()).toEqual(1)
  expect(stack.pop()).toEqual(4)
})
