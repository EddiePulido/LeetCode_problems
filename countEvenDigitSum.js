const countEven = num => {
  const digitSum = n => {
      return [...(n+'')].reduce((a,c) => a + +c, 0) % 2 === 0
  }

  let count = 0

  for(let i = 2; i <= num; i++){
      count += +digitSum(i)
  }

  return count
}