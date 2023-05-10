const runningSum = nums => {
  let sum = 0

  return nums.map(e => (sum += e, sum))
}