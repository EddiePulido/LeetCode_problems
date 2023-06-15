const isPrefixString = (s, words) => {
  return words.reduce((a,c) =>{
      a.str += c
      if(a.str === s) a.bool = true
      return a
  } ,{str:'', bool: false}).bool
}