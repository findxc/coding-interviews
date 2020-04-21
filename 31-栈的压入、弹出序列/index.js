export default (pushList, popList) => {
  // 首先两个数组的长度一定要相等，不相等直接返回 false
  if (pushList.length !== popList.length) {
    return false
  }

  let tempList = []
  let result = true

  while (pushList.length && result) {
    let p1 = pushList.pop()
    let p2 = popList.pop()

    // 如果说弹出的数字正好相等，那么就继续下一轮循环
    if (p1 === p2) {
      continue
    }

    // 当两个数字不相等的时候，先检查下临时数组弹出的数字和 p1 是否相等，如果相等的话也可以直接进入下一轮循环
    if (tempList.length) {
      let t = tempList.pop()
      if (t === p1) {
        popList.push(p2)
        continue
      } else {
        tempList.push(t)
      }
    }

    // 不断从 popList 中 pop 值出来进行对比，并把不相等时候的值存入 tempList 中，如果 popList 没有值了就从 tempList 中取值出来对比
    while (p1 !== p2 && result) {
      if (popList.length) {
        tempList.push(p2)
        p2 = popList.pop()
      } else if (tempList.length) {
        p2 = tempList.pop()
      } else {
        result = false
      }
    }
  }

  return result
}
