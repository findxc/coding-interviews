export default (reg, str) => {
  const run = (reg, str) => {
    if (reg === '' && str === '') {
      return true
    }

    if (reg[0] === '.') {
      return run(reg.slice(1), str.slice(1))
    }

    if (reg[1] === '*') {
      if (reg[0] === str[0]) {
        return run(reg, str.slice(1))
      }
      return run(reg.slice(2), str)
    }

    if (reg[0] === str[0]) {
      return run(reg.slice(1), str.slice(1))
    }

    return false
  }

  return run(reg, str)
}
