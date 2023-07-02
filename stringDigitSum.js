const digitSum = (s, k) => {

  while(s.length > k){
      let str = ''
      for(let i = 0; i < s.length; i += k){
          str += [...s.slice(i,i+k)].reduce((a,c) => a + +c, 0)
      }

      s = str
  }

  return s
}