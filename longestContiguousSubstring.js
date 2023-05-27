const longestContinuousSubstring = s => {
  let count = 1
  let max = 1

  for(let i = 1; i < s.length; i++){
      if(s[i].charCodeAt() - s[i-1].charCodeAt() === 1){
          count++
      }else{
          count = 1
      }

      max = Math.max(max, count)
  }   

  return max
}