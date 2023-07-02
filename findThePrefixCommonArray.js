const findThePrefixCommonArray = (a,b) => {
  let set = new Set
  let count = 0
  const arr = []

  for(let i = 0; i < a.length; i++){
      if(set.has(a[i])) count++
      set.add(a[i])
      if(set.has(b[i])) count++
      set.add(b[i])

      arr.push(count)
  }

  return arr
}