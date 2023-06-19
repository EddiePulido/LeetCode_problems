const canPlaceFlowers = (bed, n) => {
  if(!n) return true
  let i = 0
  while(i < bed.length){
      if(!bed[i-1] && !bed[i] && !bed[i+1]){
          n--
          bed[i] = 1
      }
      if(!n) return true
      i++
  }

  return false
}