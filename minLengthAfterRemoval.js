const minLength = function(s) {

  const stack = []
  
  for(c of s){
      if(stack.length && 
        (c === 'B' && stack.at(-1) === 'A') || 
        (c === 'D' && stack.at(-1) === 'C')){
          stack.pop()
      }else{
          stack.push(c)
      }
  }

  return stack.length
}