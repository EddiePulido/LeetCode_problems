const uncommonFromSentences = (s1, s2) => {
  const arr = s1.split(' ').concat(s2.split(' '))
  const map = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

  return arr.filter(word => map[word] === 1)
}