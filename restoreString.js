const restoreString = (s, idx) => {
  const map = [...s].reduce((a,c,i) => (a[idx[i]] = c, a), {})

  return [...new Array(s.length)].map((_,i) => map[i]).join('')
}