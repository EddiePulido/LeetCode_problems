const reversePrefix = (word, c) => {
  const i = word.indexOf(c)

  return [...word.slice(0,i+1)].reverse().join('') + word.slice(i+1)
}