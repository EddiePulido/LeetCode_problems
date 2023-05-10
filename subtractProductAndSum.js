const subtractProductAndSum = (n) => {
  const arr = [...(n + '')]

  return arr.reduce((a,c) => a * c, 1) - arr.reduce((a,c) => a + +c, 0)
}