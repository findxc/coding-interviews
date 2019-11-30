import match from './index'

test('测试空值', () => {
  expect(match('', '')).toEqual(true)
  expect(match('', 'a')).toEqual(false)
})

test('测试 . ', () => {
  expect(match('.', 'a')).toEqual(true)
  expect(match('.a', 'za')).toEqual(true)
  expect(match('..a', 'qza')).toEqual(true)
  expect(match('.a.', 'qaz')).toEqual(true)

  expect(match('.', 'aa')).toEqual(false)
  expect(match('.a', 'ab')).toEqual(false)
  expect(match('..a', 'aab')).toEqual(false)
  expect(match('.a.', 'aba')).toEqual(false)
})

test('测试 * ', () => {
  expect(match('a*', '')).toEqual(true)
  expect(match('a*', 'a')).toEqual(true)
  expect(match('a*', 'aa')).toEqual(true)
  expect(match('a*', 'aaa')).toEqual(true)

  expect(match('a*b*', '')).toEqual(true)
  expect(match('a*b*', 'a')).toEqual(true)
  expect(match('a*b*', 'b')).toEqual(true)
  expect(match('a*b*', 'ab')).toEqual(true)
  expect(match('a*b*', 'aaabbb')).toEqual(true)

  expect(match('a*b*', 'c')).toEqual(false)
  expect(match('a*b*', 'cc')).toEqual(false)
})

test('综合测试', () => {
  expect(match('.a*', 'a')).toEqual(true)
  expect(match('.a*', 'aa')).toEqual(true)
  expect(match('.a*', 'aaaa')).toEqual(true)
  expect(match('.a*', 'qaaa')).toEqual(true)
  expect(match('a.b*', 'aq')).toEqual(true)
  expect(match('a.b*', 'aqb')).toEqual(true)
  expect(match('a.b*', 'aqbbb')).toEqual(true)

  expect(match('a.b*', 'aqz')).toEqual(false)
  expect(match('a.b*', 'qz')).toEqual(false)
})
