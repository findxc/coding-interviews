var verifyPostorder = function (list, m = 0, n = list.length - 1) {
  if (n - m <= 1) {
    return true
  }
  const root = list[n]
  // splitIndex 是右子树的第一个 index
  let splitIndex = n
  let i
  // 先找到 splitIndex
  for (i = m; i <= n - 1; i++) {
    if (list[i] > root) {
      splitIndex = i
      break
    }
  }
  // 判断右子树是不是每个值都大于 root
  for (i = splitIndex + 1; i <= n - 1; i++) {
    if (list[i] < root) {
      return false
    }
  }

  // 然后再分别继续校验左子树和右子树
  return (
    verifyPostorder(list, m, splitIndex - 1) &&
    verifyPostorder(list, splitIndex, n - 1)
  )
}
