const reverseOnlyLetters = s => {
  const isChar = c => c.toLowerCase() !== c.toUpperCase()

  let chars = [...s].filter(e => isChar(e)).reverse()
  let i = 0
  return [...s].map(e => isChar(e) ? chars[i++] : e).join('')
}

// two pointers
const reverseOnlyLetters = s => {
  const isChar = c => c.toLowerCase() !== c.toUpperCase()

  const arr = s.split('')

  let left = 0
  let right = s.length - 1

  while(left < right){
      while( left < right && !isChar(s[left])) left++
      while(left < right && !isChar(s[right])) right--

      let temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left++
      right--
  }

  return arr.join('')
}