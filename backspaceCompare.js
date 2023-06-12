const backspaceCompare = (s, t) => {
    
  const newStr = str =>{
      const stack = []

      for(c of str){
          if(c === '#'){
              stack.pop()
          }else{
              stack.push(c)
          }
      }

      return stack.join('')
  }

  return newStr(s) === newStr(t)
}