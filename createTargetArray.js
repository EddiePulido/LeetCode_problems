const createTargetArray = (nums, index) => {
  const target = []

  for(let i = 0; i < nums.length; i++){
      target.splice(index[i], 0, nums[i] )
  }

  return target
}