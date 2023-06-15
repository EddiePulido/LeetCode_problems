const countGoodSubstrings = s => {
  let count = 0

  for(let i = 0, j= 3; j <= s.length; i++,j++){
      if((new Set(s.slice(i,j)).size === 3)) count++
  }

  return count
}