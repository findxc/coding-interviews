import { findRepeatNum2 as findRepeatNum } from './index'

test('[] 中没有重复值，应返回默认值 -1', () => {
  expect(findRepeatNum([])).toBe(-1)
})

test('[0] 中没有重复值，应返回默认值 -1', () => {
  expect(findRepeatNum([0])).toBe(-1)
})

test('[1, 0, 1] 中重复的是 1', () => {
  expect(findRepeatNum([1, 0, 1])).toBe(1)
})

test('[2, 3, 1, 5, 0, 4, 2] 中重复的是 2', () => {
  expect(findRepeatNum([2, 3, 1, 5, 0, 4, 2])).toBe(2)
})

test('[2, 5, 1, 5, 0, 4, 2] 中重复的是 5', () => {
  expect(findRepeatNum([2, 5, 1, 5, 0, 4, 2])).toBe(5)
})
