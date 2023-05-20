const dominantIndex = (nums) => {
  const max = Math.max(...nums)
  const i = nums.findIndex(e => e === max)
  const max2 = Math.max(...nums.filter(e => e != max))

  return max2 * 2 <= max ? i : -1
}