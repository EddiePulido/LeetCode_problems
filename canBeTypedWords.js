const canBeTypedWords = (text, brokenLetters) => {
  const set = new Set(brokenLetters)
  return text.split(' ').filter(word => {
      return [...word].every(e => !set.has(e))
  }).length
}