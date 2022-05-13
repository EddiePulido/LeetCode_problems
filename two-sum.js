var twoSum = function(nums, target) {
  let arr = []
  
  for(let i = 0; i < nums.length-1; i++){
      let missing = target - nums[i]
      if(nums.includes(missing)){
          if(i != nums.lastIndexOf(missing)){
              arr.push(i)
              arr.push(nums.lastIndexOf(missing))
              return arr
              
          }
      }
  }
};