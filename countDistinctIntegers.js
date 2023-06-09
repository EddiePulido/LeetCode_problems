const countDistinctIntegers = nums => {
  nums = nums.concat(nums.map(e => +(e+'').split('').reverse().join('')))

  return (new Set(nums)).size
}