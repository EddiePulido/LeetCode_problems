const maximumDifference = nums => {
  let diff = -1
  let min = nums[0]

  for(let i = 1; i < nums.length; i++){
      diff = Math.max(diff, nums[i] - min)
      min = Math.min(min, nums[i])
  }

  return diff || -1
}