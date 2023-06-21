const validPalindrome = s => {
  const checkPalindrome = str => {
      let i = 0
      let j = str.length - 1

      while(i < j){
          if(str[i] !== str[j]) return false
          i++
          j--
      }

      return true
  }

  let i = 0
  let j = s.length - 1

  while(i < j){
      if(s[i] !== s[j]){
          return checkPalindrome(s.slice(i,j)) || checkPalindrome(s.slice(i+1,j+1))
      }
      i++
      j--
  }

  return true
}