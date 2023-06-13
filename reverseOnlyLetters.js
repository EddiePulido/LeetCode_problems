const reverseOnlyLetters = s => {
  const isChar = c => c.toLowerCase() !== c.toUpperCase()

  let chars = [...s].filter(e => isChar(e)).reverse()
  let i = 0
  return [...s].map(e => isChar(e) ? chars[i++] : e).join('')
}