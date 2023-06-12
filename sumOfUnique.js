const sumOfUnique = nums => {
  const count = nums.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})
  const unique = Object.entries(count).filter(e => e[1] === 1).map(e => +e[0])

  return unique.reduce((a,c) => a + c, 0)
}