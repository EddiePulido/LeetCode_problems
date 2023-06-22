const wordPattern = (pattern, s) => {
  const map = {}
  const arr = s.split(' ')
  const set = new Set()
  if(arr.length !== pattern.length) return false

  for(let i = 0; i < arr.length; i++){
      if(map[pattern[i]] === undefined && !set.has(arr[i])){
          map[pattern[i]] = arr[i]
          set.add(arr[i])
      }

      if(map[pattern[i]] !== arr[i]) return false
  }

  return true
}