const maximizeSum = (nums, k) => {
  let sum = 0
  let max = Math.max(...nums)

  while(k--){
      sum += max++
  }

  return sum
}
