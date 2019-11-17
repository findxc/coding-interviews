import getCount from './index'

test('k为负数时', () => {
  expect(getCount(4, 5, -1)).toEqual(0)
})

test('k为0时', () => {
  expect(getCount(4, 5, 0)).toEqual(1)
})

test('k为1时', () => {
  expect(getCount(4, 5, 1)).toEqual(3)
})

test('k为其它值时', () => {
  expect(getCount(4, 5, 2)).toEqual(6)
  expect(getCount(4, 5, 3)).toEqual(10)
  expect(getCount(4, 5, 4)).toEqual(14)
  expect(getCount(4, 5, 5)).toEqual(17)
  expect(getCount(4, 5, 6)).toEqual(19)
  expect(getCount(4, 5, 7)).toEqual(20)
  expect(getCount(4, 5, 8)).toEqual(20)
})
