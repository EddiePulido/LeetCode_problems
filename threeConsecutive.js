const threeConsecutiveOdds = arr => {
  let count = 0

  for(num of arr){
      if(num % 2) count++
      else count = 0

      if(count === 3) return true
  }

  return false    
}