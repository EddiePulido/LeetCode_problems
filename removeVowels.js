const removeVowels = s => {
  const set = new Set('aeiou')
  return [...s].filter(c => !set.has(c)).join('')
}