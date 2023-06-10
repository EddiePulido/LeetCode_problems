const minimumOperations = (nums) => {
  let op = 0
  
  while(+nums.join('') !== 0){
      let x = Math.min(...nums.filter(e => e))
      nums = nums.map(e => e ? e - x : e)
      op++
  }

  return op
}