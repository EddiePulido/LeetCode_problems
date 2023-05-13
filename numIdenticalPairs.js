const numIdenticalPairs = nums => {
  const map = nums.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

  const formula = n => Math.floor(n * (n - 1) / 2)

  return Object.values(map).reduce((a,c) => c > 1 ? a + formula(c) : a, 0)
}
