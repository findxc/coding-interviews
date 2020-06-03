/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const getLength = (head) => {
  let node = head
  let length = 0
  while (node) {
    length++
    node = node.next
  }
  return length
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lengthA = getLength(headA)
  let lengthB = getLength(headB)
  let nodeA = headA
  let nodeB = headB

  while (lengthA > lengthB) {
    nodeA = nodeA.next
    lengthA--
  }
  while (lengthB > lengthA) {
    nodeB = nodeB.next
    lengthB--
  }

  let sameNode = null
  while (!sameNode && nodeA) {
    if (nodeA === nodeB) {
      sameNode = nodeA
    } else {
      nodeA = nodeA.next
      nodeB = nodeB.next
    }
  }

  return sameNode
}
