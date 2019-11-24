import calculate from './index'

test('n为2时', () => {
  expect(calculate(2)).toEqual(1)
})

test('n为3时', () => {
  expect(calculate(3)).toEqual(2)
})

test('n为4时', () => {
  expect(calculate(4)).toEqual(4)
})

test('n为5时', () => {
  expect(calculate(5)).toEqual(6)
})

test('n为6时', () => {
  expect(calculate(6)).toEqual(9)
})

test('n为7时', () => {
  expect(calculate(7)).toEqual(12)
})

test('n为8时', () => {
  expect(calculate(8)).toEqual(18)
})

test('n为9时', () => {
  expect(calculate(9)).toEqual(27)
})

test('n为10时', () => {
  expect(calculate(10)).toEqual(36)
})
