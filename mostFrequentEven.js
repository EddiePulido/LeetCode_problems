const mostFrequentEven = (nums) => {
  const count = nums.reduce((a,c) => c % 2 ? a : (a[c] = ++a[c] || 1, a), {})
  const max = Math.max(...Object.values(count))
  let min = Infinity

  for(num of nums){
      if(!(num % 2) && count[num] === max){
          min = Math.min(num, min)
      }
  }

  return min !== Infinity ? min : -1
}