const isPali = s => {
  let j = s.length - 1

  for(let i = 0; i < j; i++){
      if(s[i] !== s[j--]) return false
  } 

  return true
}

const firstPalindrome = words => {
  return words.find(word => isPali(word)) || ''
}