var findMaxAverage = function(nums, k) {
  let largest = 0
  let sum = 0
  for(let i = 0; i<k; i++){
      largest += nums[i]
  }
  for(let i = k; i<nums.length; i++){
      sum = largest - nums[i-k] + nums[i]
      largest = Math.max(largest, sum)
  }
  return largest/k
};