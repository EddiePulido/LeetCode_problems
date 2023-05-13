const commonFactors = (a,b) => {
  let count = 0

  const min = Math.min(a,b)

  for(let i = 1; i <= min; i++){
      if(!(a % i) && !(b % i)) count++
  }

  return count
}