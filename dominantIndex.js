const dominantIndex = (nums) => {
  const max = Math.max(...nums)
  const i = nums.findIndex(e => e === max)
  const max2 = Math.max(...nums.filter(e => e != max))

  return max2 * 2 <= max ? i : -1
}

const dominantIndex = nums => {
  let max1 = Math.max(nums[0], nums[1])
  let max2 = Math.min(nums[0], nums[1])
  let index = nums.findIndex(e => e === max1)

  for(let i = 2; i < nums.length; i++){
      const num = nums[i]
      if(num > max1){
          max2 = max1
          max1 = num
          index = i
      }else if(num > max2){
          max2 = num
      }
  }

  return max1 >= max2 * 2 ? index : -1
}