const getLucky = (s, k) => {
  const arr = [...s].map(e => e.charCodeAt() - 96)
  let str = arr.join('')

  while(k--){
      str = [...str].reduce((a,c) => a + +c, 0) + ''
  }

  return +str
}