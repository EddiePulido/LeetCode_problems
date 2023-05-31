const countOdds = (low, high) => {
  let count = 0

  for(let i = low; i <= high; i++){
      count += i % 2
  }

  return count
}