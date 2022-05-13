var isValid = function(s) {
  let para = []
  
  const open = ['[','(', '{']
  const close = [']', ')', '}']
  
  let brackets = {
      '{' : '}',
      '[' : ']',
      '(' : ')'
  }
  
  for(let i = 0; i< s.length; i++){
      let char = s[i]
      if(open.includes(char)){
          para.push(char)
      }
      
      if(close.includes(char)){
          if(brackets[para[para.length-1]] === char){
              para.pop()
          }else{
              return false
          }
      }
  }
  
  return para.length === 0
};