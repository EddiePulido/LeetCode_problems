const busyStudent = (s, e, q) => {
  let count = 0

  for(let i = 0; i < s.length; i++){
      if(s[i] <= q && q <= e[i]) count++
  }

  return count
}