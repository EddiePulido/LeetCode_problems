const findNumbers = nums => {
  return nums.reduce((a,c) => (c+'').length % 2 ? a : ++a, 0)
}