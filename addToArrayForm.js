const addToArrayForm = (num, k) => {
  const arr = [...(k+'')].map(Number)

  let j = arr.length - 1
  let carry = 0
  let i = num.length - 1

  while(j >= 0){
      let sum = arr[j] + (num[i] || 0) + carry
      if(sum > 9){
          carry = 1
          sum = sum - 10
      }else{
          carry = 0
      }

      if(i < 0){
          num.unshift(sum)
      }else{
          num[i] = sum
      }

      i--,j--
  }

  while(carry && i >= 0){
      let sum = num[i] + carry
      if(sum > 9){
          sum = sum - 10
      }else{
          carry = 0
      }
      num[i] = sum
      i--
  }

  if(carry) num.unshift(1)

  return num
}