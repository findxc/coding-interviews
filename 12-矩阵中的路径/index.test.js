import { exist } from './index'

test('空数组', () => {
  const arr = []
  expect(exist(arr, 'A')).toEqual(false)
  expect(exist(arr, 'AB')).toEqual(false)
})

test('只有一行的数组', () => {
  const arr = [['A', 'B', 'C', 'E']]
  expect(exist(arr, 'A')).toEqual(true)
  expect(exist(arr, 'BA')).toEqual(true)
  expect(exist(arr, 'ECB')).toEqual(true)
  expect(exist(arr, 'ECA')).toEqual(false)
})

test('只有一列的数组', () => {
  const arr = [['A'], ['S'], ['A']]
  expect(exist(arr, 'A')).toEqual(true)
  expect(exist(arr, 'SA')).toEqual(true)
  expect(exist(arr, 'SAS')).toEqual(false)
})

test('多行多列的数组', () => {
  const arr = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']]
  expect(exist(arr, 'ABFCS')).toEqual(true)
  expect(exist(arr, 'EEDF')).toEqual(true)
  expect(exist(arr, 'CSD')).toEqual(false)
})
