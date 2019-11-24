import calculate from './index'

test('边界情况', () => {
  expect(calculate(0, 0)).toEqual(0)
  expect(calculate(0, 1)).toEqual(0)
  expect(calculate(0, -1)).toEqual(0)
  expect(calculate(1, 0)).toEqual(1)
  expect(calculate(2, 0)).toEqual(1)
  expect(calculate(-1, 0)).toEqual(1)
})

test('正指数时', () => {
  expect(calculate(2, 1)).toEqual(2)
  expect(calculate(2, 2)).toEqual(4)
  expect(calculate(2, 3)).toEqual(8)
  expect(calculate(2, 4)).toEqual(16)
})

test('负指数时', () => {
  expect(calculate(2, -1)).toEqual(1 / 2)
  expect(calculate(2, -2)).toEqual(1 / 4)
  expect(calculate(2, -3)).toEqual(1 / 8)
  expect(calculate(2, -4)).toEqual(1 / 16)
})
