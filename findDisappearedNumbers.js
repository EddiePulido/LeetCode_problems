const findDisappearedNumbers = nums => {
  const set = new Set(nums)
  const arr = []

  for(let i = 1; i <= nums.length; i++){
      if(!set.has(i)) arr.push(i)
  }

  return arr
}