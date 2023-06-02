const validMountainArray = arr => {
  let i = 0

  while(arr[i + 1] > arr[i]) i++

  if(i === 0 || i === arr.length - 1) return false

  while(arr[i] > arr[i + 1]) i++

  return i === arr.length - 1
}
