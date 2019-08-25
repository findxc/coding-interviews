import { isNumberExistInArray } from './index'

test('[] 中不存在 1', () => {
  expect(isNumberExistInArray([], 1)).toBe(false)
})

test('[[1, 4, 7, 10]] 中不存在 2', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10]], 2)).toBe(false)
})

test('[[1, 4, 7, 10]] 中不存在 15', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10]], 15)).toBe(false)
})

test('[[1, 4, 7, 10]] 中不存在 0', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10]], 0)).toBe(false)
})

test('[[1, 4, 7, 10]] 中存在 10', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10]], 10)).toBe(true)
})

test('[[1, 4, 7, 10]] 中存在 7', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10]], 7)).toBe(true)
})

test('[[1, 4, 7, 10]] 中存在 1', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10]], 1)).toBe(true)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14]] 中不存在 5', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10], [3, 6, 8, 14]], 5)).toBe(false)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14]] 中不存在 15', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10], [3, 6, 8, 14]], 15)).toBe(false)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14]] 中不存在 0', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10], [3, 6, 8, 14]], 0)).toBe(false)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14]] 中存在 8', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10], [3, 6, 8, 14]], 8)).toBe(true)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14]] 中存在 14', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10], [3, 6, 8, 14]], 14)).toBe(true)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14]] 中存在 1', () => {
  expect(isNumberExistInArray([[1, 4, 7, 10], [3, 6, 8, 14]], 1)).toBe(true)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]] 中不存在 2', () => {
  expect(
    isNumberExistInArray(
      [[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]],
      2
    )
  ).toBe(false)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]] 中不存在 20', () => {
  expect(
    isNumberExistInArray(
      [[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]],
      20
    )
  ).toBe(false)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]] 中不存在 0', () => {
  expect(
    isNumberExistInArray(
      [[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]],
      0
    )
  ).toBe(false)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]] 中存在 8', () => {
  expect(
    isNumberExistInArray(
      [[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]],
      8
    )
  ).toBe(true)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]] 中存在 17', () => {
  expect(
    isNumberExistInArray(
      [[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]],
      17
    )
  ).toBe(true)
})

test('[[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]] 中存在 1', () => {
  expect(
    isNumberExistInArray(
      [[1, 4, 7, 10], [3, 6, 8, 14], [6, 7, 10, 16], [9, 10, 12, 17]],
      1
    )
  ).toBe(true)
})
