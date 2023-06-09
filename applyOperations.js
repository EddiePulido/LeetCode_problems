const applyOperations = nums => {
    
  for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] === nums[i + 1]){
          nums[i] = nums[i] * 2
          nums[i + 1] = 0
      }
  }

  const filtered = nums.filter(e => e)
  return filtered.concat(new Array(nums.length - filtered.length).fill(0))
}