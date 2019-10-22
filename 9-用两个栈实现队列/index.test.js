import { Queue } from './index'

test('对空队列删除节点', () => {
  const queue = new Queue()
  expect(queue.deleteHead()).toEqual(undefined)
})

test('队列添加和删除节点', () => {
  const queue = new Queue()
  queue.appendTail(1)
  expect(queue.deleteHead()).toEqual(1)

  queue.appendTail(2)
  queue.appendTail(3)
  expect(queue.deleteHead()).toEqual(2)

  queue.appendTail(4)
  queue.appendTail(5)
  queue.appendTail(6)
  expect(queue.deleteHead()).toEqual(3)
  expect(queue.deleteHead()).toEqual(4)
  expect(queue.deleteHead()).toEqual(5)
  expect(queue.deleteHead()).toEqual(6)
  expect(queue.deleteHead()).toEqual(undefined)
})
