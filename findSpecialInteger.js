const findSpecialInteger = (arr) => {
  const count = arr.reduce((a,c) => (a[c] = ++a[c] || 1, a), {})

  for(key in count){
      if(count[key] > arr.length / 4) return +key 
  }
}

const findSpecialInteger = (arr) => {
  let count = 1
  const quarter = arr.length / 4

  for(let i = 1; i < arr.length; i++){
      if(arr[i] === arr[i-1]) count++
      else count = 1

      if(count > quarter) return arr[i]
  }

  return arr[0]

}