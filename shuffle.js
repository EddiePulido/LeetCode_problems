const shuffle = (nums, n) => {
  const arr = []

  let j = n

  for(let i = 0; i < n; i++,j++){
      arr.push(nums[i])
      arr.push(nums[j])
  }

  return arr
}