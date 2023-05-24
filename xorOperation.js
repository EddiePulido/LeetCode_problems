const xorOperation = (n, start) => {
  const arr = []

  for(let i = 0; i < n; i++){
      arr.push(start)
      start += 2
  }

  return arr.reduce((a,c) => a ^ c)
}