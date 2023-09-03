const insertGreatestCommonDivisors = (head) => {
  let curr = head

  while(curr && curr.next){
      const div = greatestDivisor(curr.val, curr.next.val)
      const node = new ListNode(div)

      const next = curr.next
      curr.next = node
      node.next = next
      curr = next
  }

  return head
}

const greatestDivisor = (a, b) => {
  if(a === b) return a
  const max = Math.max(a,b)
  const min = Math.min(a,b)

  for(let i = Math.floor(max/2); i >= 1; i--){
      if(max % i === 0 && min % i === 0) return i
  }
}