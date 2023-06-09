const checkIfExist = arr => {
  const map = {}

  for(let i = 0; i < arr.length; i++){
      map[arr[i]] = i
  }

  for(let i = 0; i < arr.length; i++){
      const num = arr[i] * 2
      if(num in map && i != map[num]){
          return true
      }
  }

  return false
}