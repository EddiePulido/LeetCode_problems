const decodeMessage = (key, message) => {
  key = [...new Set(key.split(' ').join(''))].join('')
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  const map = [...key].reduce((a,c,i) => (a[c] = alpha[i], a), {})

  console.log({map})
  return [...message].map(c => c !== ' ' ? map[c] : c ).join('')
}