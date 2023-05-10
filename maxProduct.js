const maxProduct = nums => {
  let max1 = Math.max(nums[0],nums[1])
  let max2 = Math.min(nums[0],nums[1])

  for(let i = 2; i < nums.length; i++){
      const curr = nums[i]
      if(curr > max1){
          max2 = max1
          max1 = curr
      }else if(curr > max2){
          max2 = curr
      }
  }

  return (max2-1) * (max1-1)
}