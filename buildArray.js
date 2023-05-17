const buildArray = (target, n) => {
  const result = []
  const set = new Set(target)

  for(let i = 1; i <= n; i++){
      if(set.has(i)) result.push('Push')
      if(!set.has(i) && i < target.slice(-1)[0]){
          result.push('Push')
          result.push('Pop')
      }
  } 

  return result
}