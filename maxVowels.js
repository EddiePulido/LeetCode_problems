const maxVowels = (s, k) => {
  const vowels = new Set('aeiou')
  let max = 0
  let curr = 0
  for(let i = 0; i < k; i++){
      if(vowels.has(s[i])) max++
  }

  curr = max

  for(let i = k; i < s.length; i++) {
      if(max === k) return max

      if(vowels.has(s[i-k])) curr--
      
      if(vowels.has(s[i])) curr++
      max = Math.max(curr,max)
  }

  return max
}