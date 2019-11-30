import formatArr from './index'

test('测试边界', () => {
  expect(formatArr([])).toEqual([])
  expect(formatArr([1])).toEqual([1])
  expect(formatArr([2])).toEqual([2])
})

test('测试多个值', () => {
  expect(formatArr([1, 2])).toEqual([1, 2])
  expect(formatArr([2, 1])).toEqual([1, 2])
  expect(formatArr([1, 3, 2])).toEqual([1, 3, 2])
  expect(formatArr([1, 2, 3])).toEqual([1, 3, 2])
  expect(formatArr([2, 1, 3, 4, 8, 7])).toEqual([7, 1, 3, 4, 8, 2])
})
