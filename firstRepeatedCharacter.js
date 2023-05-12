const repeatedCharacter = s => {
  const map = {}

  for(c of s){
      if(map[c]) return c
      map[c] = 1
  }   
}