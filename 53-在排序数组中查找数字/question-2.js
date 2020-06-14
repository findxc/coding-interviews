// 求一个数字在一个排序数组中出现的次数

// 找到一个数字在排序数组中第一次出现的 index
const findFirstIndex = (list, value, start = 0, end = list.length - 1) => {
  if (start > end) {
    return -1
  }
  if (start === end) {
    return list[start] === value ? start : -1
  }
  const middle = Math.floor((start + end) / 2)
  if (list[middle] < value) {
    return findFirstIndex(list, value, middle + 1, end)
  }
  if (list[middle] === value) {
    if (middle === 0 || list[middle - 1] !== value) {
      return middle
    }
  }
  return findFirstIndex(list, value, start, middle - 1)
}

// 找到一个数字在排序数组中在最后一次出现的 index
const findLastIndex = (list, value, start = 0, end = list.length - 1) => {
  if (start > end) {
    return -1
  }
  if (start === end) {
    return list[start] === value ? start : -1
  }
  const middle = Math.floor((start + end) / 2)
  if (list[middle] > value) {
    return findLastIndex(list, value, start, middle - 1)
  }
  if (list[middle] === value) {
    if (middle === list.length - 1 || list[middle + 1] !== value) {
      return middle
    }
  }
  return findLastIndex(list, value, middle + 1, end)
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const start = findFirstIndex(nums, target)
  if (start === -1) {
    return 0
  }
  const end = findLastIndex(nums, target)
  return end - start + 1
}
