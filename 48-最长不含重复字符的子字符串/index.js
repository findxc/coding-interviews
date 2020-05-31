/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let totalMaxLength = 0
  let currentMaxLength = 0

  // 每个字母上一次出现的位置
  const letterPositionMap = {}

  let i
  for (i = 0; i < s.length; i++) {
    const letter = s[i]
    const position = letterPositionMap[letter]

    if (position === undefined || i - position > currentMaxLength) {
      currentMaxLength++
    } else {
      if (totalMaxLength < currentMaxLength) {
        totalMaxLength = currentMaxLength
      }

      currentMaxLength = i - position
    }

    letterPositionMap[letter] = i
  }

  if (totalMaxLength < currentMaxLength) {
    totalMaxLength = currentMaxLength
  }

  return totalMaxLength
}
