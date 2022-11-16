var replaceElements = function(arr) {
  let maxArr = [-1]
  let max = arr[arr.length-1]

  for(let i = arr.length - 1; i >= 1; i--){
      max = Math.max(arr[i],max)
      maxArr.push(max)
  }

  return maxArr.reverse()
};