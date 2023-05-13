const findMaxK = nums => {
  nums.sort((a,b) => b - a)

  for(num of nums){
      if(nums.includes(-num)) return num
  }

  return -1
}

const findMaxK = nums => {
  const map = nums.reduce((a,c) => (a[c] = true, a), {})
  let largest = -1

  for(num of nums){
      if(num > largest && map[-num]){
          largest = num
      }
  }

  return largest
}