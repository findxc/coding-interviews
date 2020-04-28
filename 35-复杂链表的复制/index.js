// 在每一个节点 N 后面 copy 一个节点 N'
// 比如 a -> b 变为 a -> a' -> b -> b'
const copyNode = (head) => {
  let current = head
  while (current) {
    const { next } = current
    current.next = { ...current }
    current = next
  }
}

// 把 random 的关系也 copy 一份
const copyRandom = (head) => {
  let current = head
  while (current) {
    const { random } = current
    if (random) {
      current.next.random = random.next
    }
    current = current.next.next
  }
}

// 把链表拆为两份，返回 copy 的那份的 head
const split = (head) => {
  if (!head) {
    return head
  }

  const copyHead = head.next

  let current = head
  let copyCurrent = copyHead

  while (copyCurrent && copyCurrent.next) {
    current.next = current.next.next
    copyCurrent.next = copyCurrent.next.next

    current = current.next
    copyCurrent = copyCurrent.next
  }

  current.next = null

  return copyHead
}

var copyRandomList = function (head) {
  copyNode(head)
  copyRandom(head)
  const copyHead = split(head)
  return copyHead
}
