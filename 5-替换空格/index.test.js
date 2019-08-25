import { replaceSpace } from './index'

test('空数组', () => {
  expect(replaceSpace([])).toStrictEqual([])
})

test("['a', ' ', ' ', 'b', 'c', ' ']", () => {
  expect(replaceSpace(['a', ' ', ' ', 'b', 'c', ' '])).toStrictEqual([
    'a',
    '%',
    '2',
    '0',
    '%',
    '2',
    '0',
    'b',
    'c',
    '%',
    '2',
    '0',
  ])
})
