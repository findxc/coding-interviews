// 把树转换为双向链表
const convert = (root) => {
  const { left, right } = root

  let listHead = root

  if (right) {
    const rightListHead = convert(right)
    root.right = rightListHead
    rightListHead.left = root
  }

  if (left) {
    const leftListHead = convert(left)
    listHead = leftListHead
    let leftListTail = leftListHead
    while (leftListTail.right) {
      leftListTail = leftListTail.right
    }
    leftListTail.right = root
    root.left = leftListTail
  }

  return listHead
}

var treeToDoublyList = function (root) {
  if (!root) {
    return root
  }

  const head = convert(root)
  let tail = head
  while (tail.right) {
    tail = tail.right
  }
  head.left = tail
  tail.right = head

  return head
}
