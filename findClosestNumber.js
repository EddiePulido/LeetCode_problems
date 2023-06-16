const findClosestNumber = (nums) => {
  let min = Infinity
  let number = min

  for(num of nums){
      let abs = Math.abs(num)
      if(abs === min){
          number = Math.max(number,num)
      }else if(abs < min){
          min = abs
          number = num
      }
  }

  return number
}