const mostCommonWord = (para, ban) => {
  const isChar = c => c.toLowerCase() !== c.toUpperCase()

  para = [...para.toLowerCase()].map(e => isChar(e) ? e : ' ').join('')

  const arr = para.split(' ')

  console.log({para,arr})

  const count = {}

  for(word of arr){
      count[word] = ++count[word] || 1
  }

  let max = 0
  let result = ''

  for(k in count){
      if(k && !ban.includes(k) && count[k] > max){
          max = count[k]
          result = k
      }
  }

  return result
}