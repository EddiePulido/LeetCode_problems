var findLucky = function(arr) {
  const frequencies = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

  const luckies = new Set(arr.filter(e => frequencies[e] === e))

  return Math.max(...luckies,-1)
}