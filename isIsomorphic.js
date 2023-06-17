const isIsomorphic = (s, t) => {
  if(s.length !== t.length) return false

  const sMap = {}
  const tMap = {}
  
  for(let i = 0; i < s.length; i++){
      const sc = s[i]
      const tc = t[i]
      if(sMap[sc] === undefined) sMap[sc] = tc
      if(tMap[tc] === undefined) tMap[tc] = sc
      if(sMap[sc] !== tc ||  tMap[tc] !== sc) return false
  }

  return true
}