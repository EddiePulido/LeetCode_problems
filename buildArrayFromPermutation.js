var buildArray = function(nums) {
  let arr = []

  for(let i = 0; i < nums.length; i++){
      arr[i] = nums[nums[i]]
  }

  return arr
};