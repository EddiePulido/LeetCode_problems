const largestOddNumber = num => {
  let str = num.toString()

  while(str && +str.slice(-1) % 2 === 0){
      str = str.slice(0,-1)
  }

  return str || ''
}