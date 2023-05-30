const arraySign = (nums) => {
  const signFunc = n => n === 0 ? 0 : n > 0 ? 1 : -1

  return signFunc(nums.reduce((a,c) => a * c, 1) || 0)
}