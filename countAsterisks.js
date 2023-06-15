const countAsterisks = s => {
  let isInside = false
  let count = 0

  for(c of s){
      if(c === '|') isInside = !isInside
      if(c === '*' && !isInside) count++
  }

  return count
}