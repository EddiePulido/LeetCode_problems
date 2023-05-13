const prefixCount = (words, pref) => {
  return words.reduce((a,c) => c.startsWith(pref) ? ++a : a, 0)
}