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

const balancedStringSplit = s => {
  return [...s].reduce((a,c) => {
      c === 'R' ? a.r++ : a.l++
      if(a.r === a.l) a.count++
      return a
  }, {r: 0, l: 0, count: 0}).count
}