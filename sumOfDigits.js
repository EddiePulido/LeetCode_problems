const sumOfDigits = nums => {
  const min = Math.min(...nums)

  return [...(min+'')].reduce((a,c) => a + +c, 0) % 2 ? 0 : 1
}