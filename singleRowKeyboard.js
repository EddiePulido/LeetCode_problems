const calculateTime = (keyboard, word) => {
  const map = [...keyboard].reduce((a,c,i) => (a[c] = i, a ), {})

  let count = map[word[0]]

  for(let i = 0; i < word.length - 1; i++){
      count += Math.abs(map[word[i]] - map[word[i+1]])
  }

  return count
}