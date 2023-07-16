const rangeSumBST = (root, low, high) => {
  if(!root) return 0
  let sum = 0

  if(root.val >= low && root.val <= high){
      sum += root.val
  }

  return sum + rangeSumBST(root.left,low,high) + rangeSumBST(root.right,low,high)
}