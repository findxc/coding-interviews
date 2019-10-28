import { parseMin } from './index'

const arrCreator = n => {
  const originArr = new Array(n).fill(1)
  if (originArr.length) {
    originArr[0] = 0
  }
  return [...originArr].map((_, index) =>
    originArr.slice(index).concat(originArr.slice(0, index))
  )
}

test('空数组', () => {
  arrCreator(0).forEach(arr => {
    expect(parseMin(arr)).toEqual(undefined)
  })
})

test('长度为1的数组', () => {
  arrCreator(1).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})

test('长度为2的数组', () => {
  arrCreator(2).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})

test('长度为3的数组', () => {
  arrCreator(3).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})

test('长度为4的数组', () => {
  arrCreator(4).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})

test('长度为5的数组', () => {
  arrCreator(5).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})

test('长度为6的数组', () => {
  arrCreator(6).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})

test('长度为7的数组', () => {
  arrCreator(7).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})

test('长度为8的数组', () => {
  arrCreator(8).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})

test('长度为9的数组', () => {
  arrCreator(9).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})

test('长度为10的数组', () => {
  arrCreator(10).forEach(arr => {
    expect(parseMin(arr)).toEqual(0)
  })
})
