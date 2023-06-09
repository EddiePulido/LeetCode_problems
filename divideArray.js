const divideArray = nums => {
  const count = nums.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

  return Object.values(count).every(n => n % 2 === 0)
}