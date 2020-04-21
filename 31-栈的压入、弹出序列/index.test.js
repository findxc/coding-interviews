import isPopListOk from './index'

test('存在空数组时', () => {
  expect(isPopListOk([], [])).toEqual(true)
  expect(isPopListOk([1], [])).toEqual(false)
  expect(isPopListOk([], [1])).toEqual(false)
})

test('只有一个数字时', () => {
  expect(isPopListOk([1], [1])).toEqual(true)
  expect(isPopListOk([1], [2])).toEqual(false)
})

test('有多个数字时', () => {
  const pushList = [1, 2, 3, 4, 5]
  expect(isPopListOk([...pushList], [1])).toEqual(false)
  expect(isPopListOk([...pushList], [5, 4, 3, 2, 1])).toEqual(true)
  expect(isPopListOk([...pushList], [4, 5, 3, 2, 1])).toEqual(true)
  expect(isPopListOk([...pushList], [3, 2, 5, 4, 1])).toEqual(true)
  expect(isPopListOk([...pushList], [4, 3, 5, 2, 1])).toEqual(true)
  expect(isPopListOk([...pushList], [1, 2, 3, 4, 5])).toEqual(true)
  expect(isPopListOk([...pushList], [2, 3, 5, 4, 1])).toEqual(true)

  expect(isPopListOk([...pushList], [2, 3, 5, 1, 4])).toEqual(false)
  expect(isPopListOk([...pushList], [1, 3, 5, 2, 4])).toEqual(false)
  expect(isPopListOk([...pushList], [1, 5, 2, 3, 4])).toEqual(false)
  expect(isPopListOk([...pushList], [5, 3, 4, 2, 1])).toEqual(false)
})
