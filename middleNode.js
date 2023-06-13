var middleNode = function(slow, fast = slow) {
  if(!fast?.next) return slow
  return middleNode(slow.next, fast.next.next)
}