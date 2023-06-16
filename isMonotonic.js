const isMonotonic = nums => {
  if(nums.length === 1) return true

  let higher = false

  const setArr = [...new Set(nums)]
  if(setArr[0] < setArr[1]) higher = true


  for(let i = 1; i < nums.length; i++){
      if(higher && nums[i] < nums[i-1]) return false
      if(!higher && nums[i] > nums[i-1]) return false
  }
  

  return true
}