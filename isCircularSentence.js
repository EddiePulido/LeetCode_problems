const isCircularSentence = sentence => {
  const arr = sentence.split(' ')
  let last = arr[0].at(-1)

  for(let i = 1; i < arr.length; i++){
      const str = arr[i]
      if(last !== str[0]) return false

      last = str.at(-1)
  }

  return last === arr[0][0]
}