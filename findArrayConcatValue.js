const findTheArrayConcVal = nums =>{
  let result = 0
  let i = 0
  let j = nums.length - 1

  while(i <= j){
      if(i === j){
          result += nums[i]
      }else{
          result += +(nums[i] + '' + nums[j])
      }

      i++
      j--
  }

  return result
}