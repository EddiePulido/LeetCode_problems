const deleteDuplicates = head => {
  let curr = head

  while(curr && curr.next){
      while(curr.val === curr.next?.val){
          curr.next = curr.next.next
      }
      curr = curr.next
  }

  return head
}