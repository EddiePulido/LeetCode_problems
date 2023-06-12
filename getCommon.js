const getCommon = (n1, n2) => {
  let i = 0
  let j = 0

  while(i in n1 && j in n2){
      const num1 = n1[i]
      const num2 = n2[j]
      
      if(num1 === num2) return num1

      if(num1 < num2) i++
      else j++
  }

  return -1
}