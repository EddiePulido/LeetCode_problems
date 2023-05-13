const mergeAlternately = (word1, word2) => {
  let i = 0
  let j = 0
  let str = ''

  while(i < word1.length && j < word2.length){
      str += word1[i++] + word2[j++]
  }   

  if(i < word1.length) str += word1.slice(i)
  if(j < word2.length) str += word2.slice(j)

  return str
}