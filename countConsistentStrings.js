const countConsistentStrings = (allowed, words) => {
  return words.filter(e => [...e].every(c => allowed.includes(c))).length
}