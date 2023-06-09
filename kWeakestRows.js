const kWeakestRows = (mat, k) => {
  const map = {}

  for(let i = 0; i < mat.length; i++){
      const count = mat[i].filter(e => e).length
      map[i] = count
  }

  const entries = Object.entries(map).sort((a,b) => a[1] - b[1])

  return entries.map(arr => +arr[0]).slice(0,k)
}