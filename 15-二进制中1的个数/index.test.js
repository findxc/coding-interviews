import calculate from './index'

test('n为0时', () => {
  expect(calculate(0)).toEqual(0)
})

test('n为1时', () => {
  expect(calculate(1)).toEqual(1)
})

test('n为2时', () => {
  expect(calculate(2)).toEqual(1)
})

test('n为3时', () => {
  expect(calculate(3)).toEqual(2)
})

test('n为4时', () => {
  expect(calculate(4)).toEqual(1)
})

test('n为5时', () => {
  expect(calculate(5)).toEqual(2)
})

test('n为6时', () => {
  expect(calculate(6)).toEqual(2)
})

test('n为7时', () => {
  expect(calculate(7)).toEqual(3)
})

test('n为8时', () => {
  expect(calculate(8)).toEqual(1)
})

test('n为9时', () => {
  expect(calculate(9)).toEqual(2)
})

test('n为10时', () => {
  expect(calculate(10)).toEqual(2)
})
