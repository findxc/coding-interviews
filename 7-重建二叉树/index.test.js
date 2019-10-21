import { getTreeHead } from './index'

test('只有一个节点时', () => {
  expect(getTreeHead([1], [1])).toEqual({ value: 1, left: null, right: null })
})

test('两个节点时', () => {
  expect(getTreeHead([4, 7], [4, 7])).toEqual({
    value: 4,
    left: null,
    right: { value: 7, left: null, right: null },
  })

  expect(getTreeHead([2, 4], [4, 2])).toEqual({
    value: 2,
    left: { value: 4, left: null, right: null },
    right: null,
  })
})

test('三个节点时', () => {
  expect(getTreeHead([1, 2, 3], [2, 1, 3])).toEqual({
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null },
  })

  expect(getTreeHead([1, 2, 4], [4, 2, 1])).toEqual({
    value: 1,
    left: {
      value: 2,
      left: { value: 4, left: null, right: null },
      right: null,
    },
    right: null,
  })
})

test('多个节点时', () => {
  expect(
    getTreeHead([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6])
  ).toEqual({
    value: 1,
    left: {
      value: 2,
      left: {
        value: 4,
        left: null,
        right: { value: 7, left: null, right: null },
      },
      right: null,
    },
    right: {
      value: 3,
      left: { value: 5, left: null, right: null },
      right: {
        value: 6,
        left: { value: 8, left: null, right: null },
        right: null,
      },
    },
  })
})
