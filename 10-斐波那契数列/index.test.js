import { calculateFibonacci } from './index'

test('n 为 0 或者 1 时', () => {
  expect(calculateFibonacci(0)).toEqual(0)
  expect(calculateFibonacci(1)).toEqual(1)
})

test('n 大于 1 时', () => {
  expect(calculateFibonacci(2)).toEqual(1)
  expect(calculateFibonacci(3)).toEqual(2)
  expect(calculateFibonacci(4)).toEqual(3)
  expect(calculateFibonacci(5)).toEqual(5)
  expect(calculateFibonacci(6)).toEqual(8)
  expect(calculateFibonacci(7)).toEqual(13)
  expect(calculateFibonacci(8)).toEqual(21)
})
