const numOfStrings = (patterns, word) => {
  return patterns.reduce((a,c) => word.includes(c) ? ++a : a, 0)
}