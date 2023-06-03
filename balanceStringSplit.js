const balancedStringSplit = s => {
  let r = 0
  let l = 0
  let count = 0

  for(c of s){
      c === 'R' ? r++ : l++
      if(r === l) count++
  }

  return count
}