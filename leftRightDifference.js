const leftRightDifference = nums => {
  let rightSum = nums.reduce((a,c) => a + c, 0)
  let leftSum = 0

  const left = []
  const right = []

  for(n of nums){
      left.push(leftSum)
      leftSum += n
  }

  for(n of nums){
      rightSum -= n
      right.push(rightSum)
  }

  return left.map((e,i) => Math.abs(e - right[i]))

}