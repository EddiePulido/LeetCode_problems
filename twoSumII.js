const twoSum = (nums, target) => {
  let low = 0
  let high = nums.length - 1

  while(low < high){
      const sum = nums[low] + nums[high]
      if(sum === target) return [++low, ++high]
      if(sum < target) low++
      if(sum > target) high--
  }  
}