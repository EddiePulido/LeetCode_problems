const smallestEqual = nums => {
  return nums.findIndex((n,i) => i % 10 === n)
}