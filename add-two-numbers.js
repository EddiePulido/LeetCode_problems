var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let head = new ListNode(0);
  let node = head;

  while (l1 || l2) {
      let l1Val = l1 ? l1.val : 0;
      let l2Val = l2 ? l2.val : 0;

      let sum = l1Val + l2Val + carry
      carry = 0;
      let newVal = sum;
      if (sum > 9) {
          newVal = sum % 10;
          carry = 1;
      }

      node.next = new ListNode(newVal)
      node = node.next;

      if (l1) {
          l1 = l1.next;
      }

      if (l2) {
          l2 = l2.next;
      }
  }

  if(carry){
      node.next = new ListNode(carry)
  }

  return head.next;
}