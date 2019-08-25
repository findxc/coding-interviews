export const printReverse = node => {
  if (node.next) {
    printReverse(node.next)
  }

  console.log(node.value)
}
