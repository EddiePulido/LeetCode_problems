var averageValue = function(nums) {
  const evenThree = nums.filter(e => !(e % 2) && !(e % 3))

  return Math.floor(evenThree.reduce((a,c) => a + c, 0) / evenThree.length) || 0
}