const maxPower = s => {
  let max = 1
  let curr = 1

  for(let i = 1; i < s.length; i++){
      if(s[i] === s[i-1]) curr++
      else curr = 1

      max = Math.max(curr,max)
  }


  return max
}