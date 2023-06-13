const isArmstrong = n => {
  return [...(n+'')].reduce((a,c,_,l) => a + c ** l.length, 0) === n
}