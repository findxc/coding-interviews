/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  let countMap = {}
  for (let i = 0; i < s.length; i++) {
    countMap[s[i]] = (countMap[s[i]] || 0) + 1
  }

  let letter = ' '

  for (let key in countMap) {
    if (countMap[key] === 1) {
      letter = key
      break
    }
  }

  return letter
}
